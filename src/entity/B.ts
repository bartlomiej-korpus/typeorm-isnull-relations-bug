import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class B {

    @PrimaryGeneratedColumn()
    id: number;

}
