import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./Product.entity";

@Entity({ name: 'ProductImages' })
export class ProductImage {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 255 })
    originalImageName: string

    @Column({ length: 255 })
    imagePath: string

    @Column({ default: false })
    isGlobal: boolean

    @ManyToOne(() => Product, (product) => product.image, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    product: Product

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<ProductImage>) {
        Object.assign(this, partial);
    }
}