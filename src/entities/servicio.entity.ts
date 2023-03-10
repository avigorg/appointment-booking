import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Comercio } from './comercio.entity';
import { Turno } from './turno.entity';

@Entity()
export class Servicio {
  @PrimaryGeneratedColumn()
  id_servicio: number;

  @Column()
  nom_servicio: string;

  @Column('time')
  hora_apertura: Date;

  @Column('time')
  hora_cierre: Date;

  @Column()
  duracion: number;

  @ManyToOne(() => Comercio, comercio => comercio.servicios)
  comercio: Comercio;

  @OneToMany(() => Turno, turno => turno.servicio)
  turnos: Turno[];
}