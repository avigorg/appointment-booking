import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Servicio } from './servicio.entity';

@Entity()
export class Turno {
  @PrimaryGeneratedColumn()
  id_turno: number;

  @Column('date')
  fecha_turno: Date;

  @Column('time')
  hora_inicio: Date;

  @Column('time')
  hora_fin: Date;

  @Column()
  estado: string;

  @ManyToOne(() => Servicio, servicio => servicio.turnos)
  servicio: Servicio;
}