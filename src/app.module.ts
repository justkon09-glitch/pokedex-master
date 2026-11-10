import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { createObserveModule } from '@nestjs/observe';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PokemonModule } from './pokemon/pokemon.module.js';
import { EntrenadorModule } from './entrenador/entrenador.module.js';
import { BatallaModule } from './batalla/batalla.module.js';
import { RoleModule } from './roles/roles.module.js';
import { UsuarioModule } from './usuario/usuario.module.js';
import { GrupoHuevoModule } from './grupo-huevo/grupo-huevo.module.js';
import { EstadisticaBaseModule } from './estadisticas-base/estadisticas-base.module.js';
import { RegionModule } from './region/region.module.js';
import { HabilidadModule } from './habilidades/habilidades.module.js';
import { MovimientoModule } from './movimientos/movimientos.module.js';
import { ObtencionModule } from './obtencion/obtencion.module.js';
import { HabitatModule } from './habitat/habitat.module.js';
import { FormaModule } from './forma/forma.module.js';
import { EvolucionModule } from './evoluciones/evoluciones.module.js';
import { TipoModule } from './tipos/tipos.module.js';
import { TipoDanoModule } from './tipo_dano/tipo_dano.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DB_HOST', '127.0.0.1'),
        port: Number(config.get('DB_PORT', 3306)),
        username: config.get<string>('DB_USER', 'root'),
        password: config.get<string>('DB_PASSWORD', ''),
        database: config.get<string>('DB_NAME', 'pokedex'),
        autoLoadEntities: true,
        synchronize: true,
        charset: 'utf8mb4',
      }),
    }),
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'pokedex',
    }),
    PokemonModule,
    TipoDanoModule,
    TipoModule,
    EvolucionModule,
    FormaModule,
    HabitatModule,
    ObtencionModule,
    MovimientoModule,
    HabilidadModule,
    RegionModule,
    EstadisticaBaseModule,
    GrupoHuevoModule,
    UsuarioModule,
    RoleModule,
    BatallaModule,
    EntrenadorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
