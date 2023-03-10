import { Test, TestingModule } from '@nestjs/testing';
import { TurnosController } from './turnos.controller';
import { TurnosService } from './turnos.service';
import { TurnosDto } from './turnos.dto';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Turno } from '../../entities/turno.entity';
describe('TurnosController', () => {
    let controller: TurnosController;
    let service: TurnosService;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        controllers: [TurnosController],
        providers: [
          TurnosService,
          {
            provide: getRepositoryToken(Turno),
            useValue: {},
          },
        ],
      }).compile();
  
      controller = module.get<TurnosController>(TurnosController);
      service = module.get<TurnosService>(TurnosService);
    });
  
    describe('generarTurnos', () => {
      it('should generate turns correctly', async () => {
        const generateTurnosDto = {
          fechaInicio: new Date('2022-01-01'),
          fechaFin: new Date('2022-01-05'),
          idServicio: 1,
        };
        const expectedResponse = [{ fecha: new Date('2022-01-01'), idServicio: 1 }];
  
        jest.spyOn(service, 'generarTurnos').mockResolvedValue(expectedResponse);
  
        const result = await controller.generarTurnos(generateTurnosDto);
        expect(result).toEqual(expectedResponse);
      });
    });
  });