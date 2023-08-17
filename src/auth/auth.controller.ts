import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UsePipes,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, signInSchema } from './dto/sign-in.dto';
import { SignInValidation } from './pipes/validation.pipe';
import { SignUpDto } from './dto/sign-up-dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  @UsePipes(new SignInValidation(signInSchema))
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(
      signInDto.email,
      signInDto.password,
      signInDto.type,
    );
  }
  @HttpCode(HttpStatus.OK)
  @Post('signup')
  @UsePipes(new SignInValidation(signInSchema))
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.singUp(
      signUpDto.email,
      signUpDto.password,
      signUpDto.type,
    );
  }
}
