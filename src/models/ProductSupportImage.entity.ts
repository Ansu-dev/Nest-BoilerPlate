import { ProductSupport } from './ProductSupport.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'ProductSupportImages' })
export class ProductSupportImage {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 255 })
    originalImageName: string

    @Column({ length: 255 })
    imagePath: string

    @ManyToOne(() => ProductSupport, (support) => support.image, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    support: ProductSupport

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<ProductSupportImage>) {
        Object.assign(this, partial);
    }
}