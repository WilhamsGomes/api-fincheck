import {
  IsEnum,
  IsHexColor,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { BackAccountType } from '../entities/BackAccount';

export class CreateBankAccountDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  initialBalance: number;

  @IsNotEmpty()
  @IsEnum(BackAccountType)
  type: BackAccountType;

  @IsString()
  @IsNotEmpty()
  @IsHexColor()
  color: string;
}
