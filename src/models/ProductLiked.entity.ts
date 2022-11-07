import { Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Product } from "./Product.entity";
import { User } from "./User.entity";

@Entity({ name: 'ProductLiked' })
export class ProductLiked {
    @ManyToOne(() => Product, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @PrimaryColumn()
    product: Product

    @ManyToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @PrimaryColumn()
    user: User

    constructor(partial: Partial<ProductLiked>) {
        Object.assign(this, partial)
    }
}