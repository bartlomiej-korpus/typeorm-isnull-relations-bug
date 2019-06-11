import {Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToOne, JoinColumn} from "typeorm";
import { B } from "./B";

@Entity()
export class A {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => B, { nullable: true })
    public b: B | null;

    @Column("integer", { nullable: true })
    public bId: number | null;
}
