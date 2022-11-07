import { Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Seller } from "./Seller.entity";
import { User } from "./User.entity";

@Entity({ name: 'SellerLiked' })
export class SellerLiked {
    @ManyToOne(() => Seller, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @PrimaryColumn()
    seller: Seller

    @ManyToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @PrimaryColumn()
    user: User

    constructor(partial: Partial<SellerLiked>) {
        Object.assign(this, partial)
    }
}