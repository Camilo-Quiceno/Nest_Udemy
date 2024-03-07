import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsOptional()
  @IsString({ message: 'Brand must be a string' })
  readonly brand?: string;

  @IsString()
  @IsOptional()
  readonly model?: string;
}
