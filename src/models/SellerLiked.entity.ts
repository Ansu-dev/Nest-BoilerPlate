import { Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Seller } from "./Seller.entity";
import { User } from "./User.entity";
import 'reflect-metadata'


@Entity({ name: 'SellerLiked' })
export class SellerLiked {
    @PrimaryColumn()
    sellerId: number

    @PrimaryColumn()
    userId: number

    @ManyToOne(() => Seller, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    seller: Seller

    @ManyToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    user: User

    constructor(partial: Partial<SellerLiked>) {
        Object.assign(this, partial)
    }
}