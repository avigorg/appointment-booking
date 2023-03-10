import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Turno } from '../../entities/turno.entity';

@Injectable()
export class TurnosService {
  constructor(
    @InjectRepository(Turno)
    private readonly turnosRepository: Repository<Turno>,
  ) {}

  async generarTurnos(fechaInicio: Date, fechaFin: Date, idServicio: number) {
    const result = await this.turnosRepository.query(
      `EXEC generarTurnos @fechaInicio='${fechaInicio}', @fechaFin='${fechaFin}', @idServicio=${idServicio}`,
    );
    return result;
  }
}