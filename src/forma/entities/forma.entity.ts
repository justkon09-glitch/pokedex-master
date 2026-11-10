import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Pokemon } from '../../pokemon/entities/pokemon.entity.js';

@Entity({name:'forma'})
export class Forma {
 @PrimaryGeneratedColumn()
 id:number;
 @Column({type:'int'})
 pokemonId: number;
 @Column({type:'varchar', length:100})
 nombre: string;
 @Column({type:'text', nullable:true})
 descripcion: string;
 @Column({type:'boolean', default:false})
 esRegional: boolean;
 @ManyToOne(()=>Pokemon,{nullable:false})
 @JoinColumn({name:'pokemonId'})
 pokemon: Pokemon;
}
