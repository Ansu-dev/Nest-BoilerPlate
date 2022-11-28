import { Product } from './Product.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from './User.entity';
import { ProductSupportComment } from './ProductSupportComment.entity';
import { ProductSupportImage } from './ProductSupportImage.entity';

@Entity({ name: 'ProductSupports' })
export class ProductSupport {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 2000 })
    content: string

    @Column({ default: false })
    isSecret: boolean

    @ManyToOne(() => Product, (product) => product.support, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    product: Product

    @ManyToOne(() => User, (user) => user.productSupport, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    user: User

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    @OneToMany(() => ProductSupportComment, (comment) => comment.support, { cascade: true })
    comment: ProductSupportComment[]

    @OneToMany(() => ProductSupportImage, (image) => image.support, { cascade: true })
    image: ProductSupportImage

    constructor(partial: Partial<ProductSupport>) {
        Object.assign(this, partial);
    }
}