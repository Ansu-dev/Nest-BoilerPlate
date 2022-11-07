import { CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Product } from "./Product.entity";
import { User } from "./User.entity";

@Entity({ name: 'ProductViewed' })
export class ProductViewed {
    @ManyToOne(() => Product, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @PrimaryColumn()
    product: Product

    @ManyToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @PrimaryColumn()
    user: User

    constructor(partial: Partial<ProductViewed>) {
        Object.assign(this, partial)
    }
}