import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BusinessOption, LedgerType, SellerType, Tier } from "./enum/enum";
import { Seller } from "./Seller.entity";


@Entity({ name: 'SellerInfo' })
export class SellerInfo {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Seller, (seller) => seller.sellerInfo, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    seller: Seller

    @Column({ type: 'enum', enum: SellerType })
    sellerType: SellerType

    @Column({ type: 'enum', enum: BusinessOption })
    businessOption: BusinessOption

    @Column({ length: 40, nullable: true })
    name: string

    @Column({ length: 500, nullable: true })
    residentNumber: string

    @Column({ nullable: true })
    businessNumber: string

    @Column({ length: 30, nullable: true })
    brandName: string

    @Column({ length: 30, nullable: true })
    englishBrandName: string

    @Column({ length: 100, nullable: true })
    brandStory: string

    @Column({ length: 100, nullable: true })
    englishBrandStory: string

    @Column({ length: 255, nullable: true })
    brandImage: string

    @Column({ length: 30, nullable: true })
    bankName: string

    @Column({ length: 255, nullable: true })
    bankAccount: string

    @Column({ length: 50, nullable: true })
    depositor: string

    @Column({ type: 'enum', enum: Tier, default: Tier.general })
    tier: Tier

    @Column({ default: false })
    webuddingOnly: boolean

    @Column({ type: 'enum', enum: LedgerType, default: LedgerType.account })
    ledgerType: LedgerType

    @Column({ length: 255, nullable: true })
    ledgerEmail: string

    @Column({ default: 20 })
    feeRatio: number

    @Column({ length: 50, nullable: true })
    recommendBrandName: string

    @Column({ length: 50, nullable: true })
    instagram: string

    @Column({ default: false })
    temporary: boolean

    @Column({ default: 0 })
    productCount: number

    @Column({ default: false })
    popbillChecked: boolean

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<SellerInfo>) {
        Object.assign(this, partial);
    }
}