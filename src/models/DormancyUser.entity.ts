import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'DormancyUser'})
export class DormancyUser {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    phone: string

    @Column()
    birth: string
    
    @Column()
    userId: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    constructor(partial: Partial<DormancyUser>) {
        Object.assign(this, partial);
    }
}