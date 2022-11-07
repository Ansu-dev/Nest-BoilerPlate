import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'AdministratorHistory' })
export class AdministratorHistory {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    type: string

    @Column()
    ipAddress: string

    @Column({ nullable: true })
    macAddress: string

    @Column()
    administratorId: number

    @Column({ nullable: true })
    name: string

    @CreateDateColumn()
    createdAt: Date

    constructor(partial: Partial<AdministratorHistory>) {
        Object.assign(this, partial);
    }
}