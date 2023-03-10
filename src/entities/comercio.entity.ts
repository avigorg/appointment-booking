import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Servicio } from './servicio.entity';

@Entity()
export class Comercio {
  @PrimaryGeneratedColumn()
  id_comercio: number;

  @Column()
  nom_comercio: string;

  @Column()
  aforo_comercio: number;

  @OneToMany(() => Servicio, servicio => servicio.comercio)
  servicios: Servicio[];
}