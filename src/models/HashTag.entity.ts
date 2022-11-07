import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./Product.entity";

@Entity({ name: 'HashTags' })
export class HashTag {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 30 })
    name: string

    @ManyToOne(() => Product, (product) => product.hashtag, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    product: Product

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<HashTag>) {
        Object.assign(this, partial);
    }
}