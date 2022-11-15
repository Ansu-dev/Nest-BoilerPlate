import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductReview } from "./ProductReview.entity";

@Entity({ name: 'ProductReviewImages' })
export class ProductReviewImage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    originalImageName: string

    @Column({ length: 255 })
    imagePath: string

    @ManyToOne(() => ProductReview, (review) => review.reviewImage, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    review: ProductReview

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<ProductReviewImage>) {
        Object.assign(this, partial);
    }
}