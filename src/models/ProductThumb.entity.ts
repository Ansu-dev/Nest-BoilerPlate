import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./Product.entity";

@Entity({ name: 'ProductThumbs' })
export class ProductThumb {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 255 })
    originalThumbName: string

    @Column({ length: 255 })
    thumbPath: string

    @Column({ default: false })
    isGlobal: boolean

    @Column({ default: false })
    title: boolean

    @ManyToOne(() => Product, (product) => product.thumb, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    product: Product

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<ProductThumb>) {
        Object.assign(this, partial);
    }
}