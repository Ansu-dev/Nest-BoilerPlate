import { Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product.entity";
import { User } from "./User.entity";
import 'reflect-metadata'


@Entity({ name: 'ProductLiked' })
export class ProductLiked {
    @PrimaryColumn()
    productId: number

    @PrimaryColumn()
    userId: number

    @ManyToOne(() => Product, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    product: Product

    @ManyToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    user: User

    constructor(partial: Partial<ProductLiked>) {
        Object.assign(this, partial)
    }
}