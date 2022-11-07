import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'AdministratorGroups' })
export class AdministratorGroup {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 20 })
    name: string

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<AdministratorGroup>) {
        Object.assign(this, partial);
    }
}