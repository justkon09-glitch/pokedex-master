import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name:'habitat'})
export class Habitat {
 @PrimaryGeneratedColumn()
 id:number;

 @Column({type:'varchar', length:80,unique:true})
 nombre: string;
 
 @Column({type:'text', nullable:true})
 descripcion: string;
}
