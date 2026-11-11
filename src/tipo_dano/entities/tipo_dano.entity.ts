import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name:'tipo_dano'})
export class TipoDano {
 @PrimaryGeneratedColumn()
 id:number;

 @Column({type:'varchar', length:40,unique:true})
 nombre: string;
 
 @Column({type:'varchar', length:30,nullable:true})
 categoria: string;
}
