import { Controller, Get, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TurnosDto } from './turnos.dto';
import { TurnosService } from './turnos.service';

@Controller('turnos')
export class TurnosController {
  constructor(private readonly turnosService: TurnosService) {}

  @ApiOperation({
    summary: 'Generar turnos',
    description: 'Genera un conjunto de turnos para un servicio en un rango de fechas.',
  })
  @ApiResponse({
    status: 200,
    description: 'Turnos generados exitosamente.',
  })
  @ApiResponse({
    status: 400,
    description: 'Parámetros inválidos.',
  })
  @Get('generar-turnos')
  async generarTurnos(
    @Query() turnosDto: TurnosDto
  ) {
    const result = await this.turnosService.generarTurnos(
        turnosDto.fechaInicio,
        turnosDto.fechaFin,
        turnosDto.idServicio,
    );
    return result;
  }
}