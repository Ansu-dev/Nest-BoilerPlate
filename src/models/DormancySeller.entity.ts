import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'DormancySeller' })
export class DormancySeller {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    phone: string

    @Column({ nullable: true })
    name: string

    @Column({ length: 500, nullable: true })
    residentNumber: string

    @Column({ nullable: true })
    businessNumber: string

    @Column({ length: 30, nullable: true })
    bankName: string

    @Column({ length: 255, nullable: true })
    bankAccount: string

    @Column({ length: 50, nullable: true })
    depositor: string

    @Column({ length: 255, nullable: true })
    ledgerEmail: string

    @Column()
    sellerId: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    constructor(partial: Partial<DormancySeller>) {
        Object.assign(this, partial);
    }
}