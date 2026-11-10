import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Entrenador } from '../../entrenador/entities/entrenador.entity.js';
import { Pokemon } from '../../pokemon/entities/pokemon.entity.js';

@Entity({name:'obtencion'})
export class Obtencion {
 @PrimaryGeneratedColumn()
 id:number;
 @Column({type:'int'})
 entrenadorId: number;
 @Column({type:'int'})
 pokemonId: number;
 @Column({type:'date'})
 fechaObtencion: Date;
 @Column({type:'varchar', length:80})
 metodo: string;
 @Column({type:'varchar', length:100,nullable:true})
 apodo: string;
 @Column({type:'int', default:1})
 nivel: number;
 @ManyToOne(()=>Entrenador,{nullable:false})
 @JoinColumn({name:'entrenadorId'})
 entrenador: Entrenador;
 @ManyToOne(()=>Pokemon,{nullable:false})
 @JoinColumn({name:'pokemonId'})
 pokemon: Pokemon;
}
