import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  something(): string {
    return 'something';
  }
}
