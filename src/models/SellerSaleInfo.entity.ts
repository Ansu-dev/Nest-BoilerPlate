import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Currency } from './enum/enum';
import { Seller } from "./Seller.entity";

@Entity({ name: 'SellerSaleInfo' })
export class SellerSaleInfo {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ default: 0 })
    thisMonthAmount: number

    @Column({ default: 0 })
    totalAmount: number

    @Column({ default: 0 })
    totalLedgerAmount: number

    @Column({ type: 'enum', enum: Currency, default: Currency.KRW })
    currency: Currency

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    @OneToOne(() => Seller, (seller) => seller.saleInfo, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    seller: Seller

    constructor(partial: Partial<SellerSaleInfo>) {
        Object.assign(this, partial);
    }
}