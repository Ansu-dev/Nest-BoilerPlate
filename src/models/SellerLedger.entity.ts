import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Currency, LedgerStatus, TaxStatus } from "./enum/enum";
import { Seller } from "./Seller.entity";



@Entity({ name: 'SellerLedgers' })
export class SellerLedger {
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

    @Column({ type: 'double', unsigned: true, })
    feeRatio: number

    @Column({ type: 'int', default: 0 })
    withholdingTax: number

    @Column({ type: 'enum', enum: LedgerStatus, default: LedgerStatus.aggregate })
    ledgerStatus: LedgerStatus

    @Column({ type: 'enum', enum: TaxStatus, default: TaxStatus.unissued })
    taxStatus: TaxStatus

    @Column({ type: 'json', nullable: true })
    errorInfo: any

    @ManyToOne(() => Seller, (seller) => seller.ledger, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    seller: Seller

    @Column({ type: 'enum', enum: Currency, default: Currency.KRW })
    currency: Currency

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<SellerLedger>) {
        Object.assign(this, partial);
    }
}