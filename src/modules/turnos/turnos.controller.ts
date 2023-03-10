import { Controller, Get, Query } from '@nestjs/common';
import { TurnosDto } from './turnos.dto';
import { TurnosService } from './turnos.service';

@Controller('turnos')
export class TurnosController {
  constructor(private readonly turnosService: TurnosService) {}

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