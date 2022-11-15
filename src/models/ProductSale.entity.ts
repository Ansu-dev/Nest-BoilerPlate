import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./Product.entity";

@Entity({ name: 'ProductSales' })
export class ProductSale {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 255 })
    originalSaleName: string

    @Column({ length: 255 })
    salePath: string

    @Column({ default: false })
    isGlobal: boolean

    @ManyToOne(() => Product, (product) => product.sale, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    product: Product

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<ProductSale>) {
        Object.assign(this, partial);
    }
}