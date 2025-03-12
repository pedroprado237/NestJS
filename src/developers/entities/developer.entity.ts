import { Entity, Column, PrimaryColumn, BeforeInsert } from 'typeorm';
import { nanoid } from 'nanoid';

@Entity()
export class Developer {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    dateOfBirth: string;

    @BeforeInsert()
    generateID() {
        this.id = `dev_${nanoid()}`;
    }
}
