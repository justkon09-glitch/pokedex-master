import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Tipo } from '../../tipos/entities/tipo.entity.js';
import { TipoDano } from '../../tipo_dano/entities/tipo_dano.entity.js';

@Entity({name:'movimientos'})
export class Movimiento {
 @PrimaryGeneratedColumn()
 id:number;
 @Column({type:'varchar', length:100,unique:true})
 nombre: string;
 @Column({type:'text', nullable:true})
 descripcion: string;
 @Column({type:'int', nullable:true})
 potencia: number;
 @Column({type:'int', nullable:true})
 precision: number;
 @Column({type:'int', nullable:true})
 pp: number;
 @Column({type:'int'})
 tipoId: number;
 @Column({type:'int'})
 tipoDanoId: number;
 @ManyToOne(()=>Tipo,{nullable:false})
 @JoinColumn({name:'tipoId'})
 tipo: Tipo;
 @ManyToOne(()=>TipoDano,{nullable:false})
 @JoinColumn({name:'tipoDanoId'})
 tipoDano: TipoDano;
}
