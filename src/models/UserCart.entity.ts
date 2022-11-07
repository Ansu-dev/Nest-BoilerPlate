import { Product } from './Product.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User.entity";

@Entity({ name: 'UserCarts' })
export class UserCart {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (user) => user.cart, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    user: User

    @ManyToOne(() => Product, (product) => product.cart, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    product: Product

    @Column({ type: 'int', default: 1 })
    quantity: number

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<UserCart>) {
        Object.assign(this, partial);
    }
}