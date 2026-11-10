import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Tipo } from '../../tipos/entities/tipo.entity.js';
import { Habilidad } from '../../habilidades/entities/habilidade.entity.js';
import { Region } from '../../region/entities/region.entity.js';
import { Habitat } from '../../habitat/entities/habitat.entity.js';
import { GrupoHuevo } from '../../grupo-huevo/entities/grupo-huevo.entity.js';

@Entity({name:'pokemon'})
export class Pokemon {
 @PrimaryGeneratedColumn()
 id:number;
 @Column({type:'int', unique:true})
 numeroPokedex: number;
 @Column({type:'varchar', length:100,unique:true})
 nombre: string;
 @Column({type:'text', nullable:true})
 descripcion: string;
 @Column({type:'decimal', precision:6,scale:2,nullable:true})
 altura: number;
 @Column({type:'decimal', precision:7,scale:2,nullable:true})
 peso: number;
 @Column({type:'int'})
 tipoPrimarioId: number;
 @Column({type:'int', nullable:true})
 tipoSecundarioId: number;
 @Column({type:'int', nullable:true})
 habilidadId: number;
 @Column({type:'int', nullable:true})
 regionId: number;
 @Column({type:'int', nullable:true})
 habitatId: number;
 @Column({type:'int', nullable:true})
 grupoHuevoId: number;

 //relaciones
 @ManyToOne(()=>Tipo,{nullable:false})
 @JoinColumn({name:'tipoPrimarioId'})
 tipoPrimario: Tipo;

 @ManyToOne(()=>Tipo,{nullable:true})
 @JoinColumn({name:'tipoSecundarioId'})
 tipoSecundario: Tipo;

 @ManyToOne(()=>Habilidad,{nullable:true})
 @JoinColumn({name:'habilidadId'})
 habilidad: Habilidad;

 @ManyToOne(()=>Region,{nullable:true})
 @JoinColumn({name:'regionId'})
 region: Region;

 @ManyToOne(()=>Habitat,{nullable:true})
 @JoinColumn({name:'habitatId'})
 habitat: Habitat;
 
 @ManyToOne(()=>GrupoHuevo,{nullable:true})
 @JoinColumn({name:'grupoHuevoId'})
 grupoHuevo: GrupoHuevo;
}
