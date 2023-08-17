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
import { SignInValidation } from './validation/sign-in.validation';
import { SignUpDto, signUpSchema } from './dto/sign-up-dto';
import { SignUpValidation } from './validation/sign-up.validation';

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
  @UsePipes(new SignUpValidation(signUpSchema))
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.singUp(
      signUpDto.email,
      signUpDto.password,
      signUpDto.type,
    );
  }
}
