import { Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product.entity";
import { User } from "./User.entity";
import 'reflect-metadata'


@Entity({ name: 'ProductViewed' })
export class ProductViewed {
    @PrimaryColumn()
    productId: number

    @PrimaryColumn()
    userId: number

    @ManyToOne(() => Product, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    product: Product

    @ManyToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    user: User

    constructor(partial: Partial<ProductViewed>) {
        Object.assign(this, partial)
    }
}