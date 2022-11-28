import { ProductSupport } from './ProductSupport.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Seller } from './Seller.entity';

@Entity({ name: 'ProductSupportComments' })
export class ProductSupportComment {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 2000 })
    content: string

    @ManyToOne(() => ProductSupport, (support) => support.comment, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    support: ProductSupport

    @ManyToOne(() => Seller, (seller) => seller.supportComment, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    seller: Seller

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<ProductSupportComment>) {
        Object.assign(this, partial);
    }
}