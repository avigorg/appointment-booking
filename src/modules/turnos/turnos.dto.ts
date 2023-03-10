import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsPositive } from 'class-validator';

export class TurnosDto {
  @IsDate()
  @ApiProperty({
    description: 'La fecha de inicio del periodo para generar los turnos',
    example: '2023-03-10',
  })
  fechaInicio: Date;

  @IsDate()
  @ApiProperty({
    description: 'La fecha de fin del periodo para generar los turnos',
    example: '2023-03-17',
  })
  fechaFin: Date;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'El ID del servicio para el cual se generarán los turnos',
    example: 22,
  })
  idServicio: number;
}