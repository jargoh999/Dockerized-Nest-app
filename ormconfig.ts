// ormconfig.ts
import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT || '5432'),
    username: process.env.POSTGRES_USER || 'nest_db',
    password: process.env.POSTGRES_PASSWORD || 'password',
    database: process.env.POSTGRES_NAME || 'nest_crud',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true,
};