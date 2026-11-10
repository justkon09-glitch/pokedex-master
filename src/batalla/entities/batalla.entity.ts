import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Entrenador } from '../../entrenador/entities/entrenador.entity.js';

@Entity({name:'batalla'})
export class Batalla {
 @PrimaryGeneratedColumn()
 id:number;
 @Column({type:'int'})
 entrenadorLocalId: number;
 @Column({type:'int'})
 entrenadorVisitanteId: number;
 @Column({type:'int', nullable:true})
 ganadorId: number;
 @Column({type:'datetime'})
 fecha: Date;
 @Column({type:'varchar', length:30,nullable:true})
 resultado: string;
 @Column({type:'varchar', length:120,nullable:true})
 lugar: string;
 @ManyToOne(()=>Entrenador,{nullable:false})
 @JoinColumn({name:'entrenadorLocalId'})
 entrenadorLocal: Entrenador;
 @ManyToOne(()=>Entrenador,{nullable:false})
 @JoinColumn({name:'entrenadorVisitanteId'})
 entrenadorVisitante: Entrenador;
 @ManyToOne(()=>Entrenador,{nullable:true})
 @JoinColumn({name:'ganadorId'})
 ganador: Entrenador;
}
