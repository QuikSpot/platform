// Official WhatsApp Business "click to chat" link — the same one encoded in public/whatsapp-qr.png.
// This is Meta's wa.me/message/{code} short-link format: the destination number and greeting
// message are configured server-side on WhatsApp Business, so this link can't take a custom
// ?text= override the way a plain wa.me/<number> link can.
export const WHATSAPP_BOT_LINK = 'https://go.instafixd.com/whatsapp';

// instaFixd's WhatsApp Business number. Used (instead of the QR short link above) because a plain
// wa.me/<number> link supports a custom prefilled ?text= message, which the homepage "Find Pro"
// search needs.
export const WHATSAPP_NUMBER = '94785228985';

const DEFAULT_INQUIRY_MESSAGE = "Hi instaFixd! I'd like help finding a service pro.";

export function buildWhatsAppInquiryLink(message: string): string {
  const text = message.trim() || DEFAULT_INQUIRY_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
