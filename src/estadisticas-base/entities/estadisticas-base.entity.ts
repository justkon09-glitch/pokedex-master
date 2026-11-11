import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { Pokemon } from '../../pokemon/entities/pokemon.entity.js';

@Entity({ name: 'estadisticas_base' })
export class EstadisticaBase {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', unique: true })
  pokemonId: number;

  @Column({ type: 'int' })
  hp: number;

  @Column({ type: 'int' })
  ataque: number;

  @Column({ type: 'int' })
  defensa: number;

  @Column({ type: 'int' })
  ataqueEspecial: number;

  @Column({ type: 'int' })
  defensaEspecial: number;

  @Column({ type: 'int' })
  velocidad: number;

  @OneToOne(() => Pokemon)
  @JoinColumn({ name: 'pokemonId' })
  pokemon: Pokemon;
}