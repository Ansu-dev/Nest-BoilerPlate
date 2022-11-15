import { Seller } from './Seller.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'SellerPopbillAccount' })
export class SellerPopbillAccount {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 30, nullable: true })
    representativeName: string

    @Column({ length: 30, nullable: true })
    managerName: string

    @Column({ length: 30, nullable: true })
    businessName: string

    @Column({ length: 10, nullable: true })
    zipCode: string

    @Column({ length: 50, nullable: true })
    address: string

    @Column({ length: 50, nullable: true })
    detailAddress: string

    @Column({ length: 20, nullable: true })
    businessType: string

    @Column({ length: 20, nullable: true })
    businessItem: string

    @Column({ length: 30, nullable: true })
    popbillId: string

    @Column({ length: 255, nullable: true })
    popbillPassword: string

    @OneToOne(() => Seller, (seller) => seller.popbill, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    seller: Seller

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    constructor(partial: Partial<SellerPopbillAccount>) {
        Object.assign(this, partial);
    }
}