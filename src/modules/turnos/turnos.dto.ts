import { IsDate, IsInt, IsPositive } from 'class-validator';

export class TurnosDto {
  @IsDate()
  fechaInicio: Date;

  @IsDate()
  fechaFin: Date;

  @IsInt()
  @IsPositive()
  idServicio: number;
}