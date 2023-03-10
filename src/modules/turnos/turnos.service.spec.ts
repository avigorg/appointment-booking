import { Test, TestingModule } from '@nestjs/testing';
import { TurnosService } from './turnos.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Turno } from '../../entities/turno.entity';
import { Repository } from 'typeorm';

describe('TurnosService', () => {
    let service: TurnosService;
    let repository: Repository<Turno>;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [
          TurnosService,
          {
            provide: getRepositoryToken(Turno),
            useClass: Repository,
          },
        ],
      }).compile();
  
      service = module.get<TurnosService>(TurnosService);
      repository = module.get<Repository<Turno>>(getRepositoryToken(Turno));
    });
  
    it('should generate turns', async () => {
      const fechaInicio = new Date('2023-03-10');
      const fechaFin = new Date('2023-03-20');
      const idServicio = 1;
      const expected = [{ turno: 1 }, { turno: 2 }, { turno: 3 }];
  
      jest.spyOn(repository, 'query').mockResolvedValue(expected);
  
      const result = await service.generarTurnos(fechaInicio, fechaFin, idServicio);
  
      expect(result).toEqual(expected);
      expect(repository.query).toHaveBeenCalledWith(
        `EXEC generarTurnos @fechaInicio='${fechaInicio}', @fechaFin='${fechaFin}', @idServicio=${idServicio}`,
      );
    });
  });