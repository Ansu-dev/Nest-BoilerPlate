import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Seller } from "./Seller.entity";

@Entity({ name: 'SellerGroups' })
export class SellerGroup {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 100 })
    name: string

    @Column()
    alphabet: boolean

    @Column()
    isGlobal: boolean

    @ManyToMany(() => Seller, (seller) => seller.id, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinTable({
        name: 'SellerGroups-Sellers',
        joinColumn: { name: 'sellerGroupId' },
        inverseJoinColumn: { name: 'sellerId' }
    })
    seller: Seller[]

    constructor(partial: Partial<SellerGroup>) {
        Object.assign(this, partial);
    }
}