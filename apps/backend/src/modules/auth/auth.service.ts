import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtPayload } from './strategies/jwt.strategy';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  roles: string[];
}

@Injectable()
export class AuthService {
  // In-memory store — replace with a real DB layer
  private readonly users: User[] = [];

  constructor(private readonly jwtService: JwtService) {}

  async register(dto: RegisterDto) {
    const existing = this.users.find((u) => u.email === dto.email);
    if (existing) {
      throw new UnauthorizedException('Email already in use');
    }

    const user: User = {
      id: crypto.randomUUID(),
      name: dto.name,
      email: dto.email,
      // NOTE: hash passwords in production — bcrypt/argon2
      password: dto.password,
      roles: ['user'],
    };

    this.users.push(user);
    return this.signToken(user);
  }

  async login(dto: LoginDto) {
    const user = this.users.find((u) => u.email === dto.email);

    if (!user || user.password !== dto.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.signToken(user);
  }

  private signToken(user: User) {
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      roles: user.roles,
    };

    return {
      accessToken: this.jwtService.sign(payload),
      user: { id: user.id, name: user.name, email: user.email, roles: user.roles },
    };
  }
}
