import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({ name: 'AdministratorLedger' })
export class AdministratorLedger {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 4 })
    saleYear: string

    @Column({ length: 2 })
    saleMonth: string

    @Column({ type: 'double', unsigned: true })
    saleAmount: number

    @Column({ type: 'double', unsigned: true })
    ledgerAmount: number

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<AdministratorLedger>) {
        Object.assign(this, partial);
    }
}