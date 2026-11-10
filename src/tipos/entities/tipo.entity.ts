import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name:'tipos'})
export class Tipo {
 @PrimaryGeneratedColumn()
 id:number;
 @Column({type:'varchar', length:50,unique:true})
 nombre: string;
 @Column({type:'text', nullable:true})
 descripcion: string;
}
