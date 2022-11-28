import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Seller } from './Seller.entity';



@Entity({ name: 'TemporaryProduct' })
export class TemporaryProduct {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 255, default: null })
    prodName: string

    @Column({ length: 255, default: null })
    englishProdName: string

    @OneToOne(() => Seller, (seller) => seller.temp, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    seller: Seller

    @Column({ type: 'double', default: 0 })
    discountRate: number

    @Column({ type: 'int', default: 0 })
    priceOrg: number

    @Column({ type: 'int', default: 0 })
    price: number

    @Column({ type: 'double', default: 0 })
    dollarPriceOrg: number

    @Column({ type: 'double', default: 0 })
    dollarPrice: number

    @Column({ type: 'text', nullable: true, default: null })
    summary: string

    @Column({ type: 'longtext', nullable: true, default: null })
    detail: string

    @Column({ type: 'text', nullable: true, default: null })
    globalSummary: string

    @Column({ type: 'longtext', nullable: true, default: null })
    globalDetail: string

    @Column({ default: true })
    global: boolean

    @Column({ default: true })
    domestic: boolean

    @Column({ default: false })
    webuddingOnly: boolean

    @Column({ default: false })
    free: boolean

    @Column({ type: 'json', default: null })
    thumb: any

    @Column({ type: 'json', default: null })
    thumbGlobal: any

    @Column({ type: 'json', default: null })
    image?: any

    @Column({ type: 'json', default: null })
    imageGlobal?: any

    @Column({ type: 'json', default: null })
    sale: any

    @Column({ type: 'json', default: null })
    hashtag?: any

    @Column({ default: 0 })
    category: number

    @CreateDateColumn({ type: 'timestamp', nullable: true })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updatedAt: Date

    constructor(partial: Partial<TemporaryProduct>) {
        Object.assign(this, partial);
    }
}
