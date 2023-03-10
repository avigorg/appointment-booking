

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Comercio } from '../../entities/comercio.entity';
import { Servicio } from '../../entities/servicio.entity';
import { Turno } from '../../entities/turno.entity';

export const MSSQL_CONFIG: TypeOrmModuleOptions = {
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'root',
  password: 'Fer315*874guA',
  database: 'booking',
  entities: [Comercio, Servicio, Turno],
  synchronize: false, 
  options: { encrypt: false }
};

