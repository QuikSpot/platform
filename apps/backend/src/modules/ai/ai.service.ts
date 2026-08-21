import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export interface CategoryPrediction {
  main_category_id: string;
  main_category_name: string;
  sub_category_id: string;
  sub_category_name: string;
}

export interface RagResponse {
  answer: string;
  sources: string[];
}

@Injectable()
export class AiService {
  private readonly logger = new Logger(AiService.name);

  constructor(private readonly config: ConfigService) {}

  async predictCategory(query: string): Promise<CategoryPrediction[]> {
    return this.callAiApi<CategoryPrediction[]>('predict-category', { query });
  }

  async improveText(text: string): Promise<{ improved: string }> {
    return this.callAiApi<{ improved: string }>('improve-text', { text });
  }

  async chat(question: string): Promise<RagResponse> {
    const baseUrl = this.config.getOrThrow<string>('AI_API_URL');
    const url = `${baseUrl}/rag/get-knowledge`;

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      this.logger.error(`[AI] chat error ${res.status}: ${text}`);
      throw new InternalServerErrorException('AI service is unavailable. Please try again.');
    }

    return res.json() as Promise<RagResponse>;
  }

  private async callAiApi<T>(path: string, body: Record<string, string>): Promise<T> {
    const baseUrl = this.config.getOrThrow<string>('AI_API_URL');

    const res = await fetch(`${baseUrl}/${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      this.logger.error(`[AI] ${path} error ${res.status}: ${text}`);
      throw new InternalServerErrorException('AI service is unavailable. Please try again.');
    }

    return res.json() as Promise<T>;
  }
}
