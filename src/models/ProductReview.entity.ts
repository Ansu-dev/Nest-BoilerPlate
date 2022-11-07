import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./Product.entity";
import { ProductReviewImage } from "./ProductReviewImage.entity";
import { User } from "./User.entity";

@Entity({ name: 'ProductReviews' })
export class ProductReview {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ default: false })
    type: boolean

    @Column({ length: 1000, default: null })
    content: string

    @Column({ length: 1000, default: null })
    reply: string

    @Column({ type: 'double', default: 0 })
    rating: number

    @ManyToOne(() => User, (user) => user.review, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    user: User

    @ManyToOne(() => Product, (product) => product.review, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    product: Product

    @Column({ default: true })
    enable: boolean

    @Column({ nullable: true })
    deleteDate: Date

    @OneToMany(() => ProductReviewImage, (reviewImage) => reviewImage.review, { cascade: true })
    reviewImage?: ProductReviewImage[]

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<ProductReview>) {
        Object.assign(this, partial);
    }
}