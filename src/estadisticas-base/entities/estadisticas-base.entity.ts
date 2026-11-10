import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Pokemon } from '../../pokemon/entities/pokemon.entity.js';

@Entity({name:'estadisticas_base'})
export class EstadisticaBase {
 @PrimaryGeneratedColumn()
 id:number;
 @Column({type:'int', unique:true})
 pokemonId: number;
 @Column({type:'int', default:0})
 hp: number;
 @Column({type:'int', default:0})
 ataque: number;
 @Column({type:'int', default:0})
 defensa: number;
 @Column({type:'int', default:0})
 ataqueEspecial: number;
 @Column({type:'int', default:0})
 defensaEspecial: number;
 @Column({type:'int', default:0})
 velocidad: number;
 @OneToOne(()=>Pokemon)
 @JoinColumn({name:'pokemonId'})
 pokemon: Pokemon;
}
