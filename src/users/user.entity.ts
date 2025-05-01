import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    @IsNotEmpty()
    username: string;

    @Column()
    @IsNotEmpty()
    password: string;

    @Column({ unique: true })
    @IsEmail()
    email: string;

    @CreateDateColumn()
    createdAt: Date;
}