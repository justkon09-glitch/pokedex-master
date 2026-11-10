import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Pokemon } from '../../pokemon/entities/pokemon.entity.js';

@Entity({name:'evoluciones'})
export class Evolucion {
 @PrimaryGeneratedColumn()
 id:number;
 @Column({type:'int'})
 pokemonOrigenId: number;
 @Column({type:'int'})
 pokemonDestinoId: number;
 @Column({type:'int', nullable:true})
 nivelRequerido: number;
 @Column({type:'varchar', length:255,nullable:true})
 condicion: string;
 @ManyToOne(()=>Pokemon,{nullable:false})
 @JoinColumn({name:'pokemonOrigenId'})
 pokemonOrigen: Pokemon;
 @ManyToOne(()=>Pokemon,{nullable:false})
 @JoinColumn({name:'pokemonDestinoId'})
 pokemonDestino: Pokemon;
}
