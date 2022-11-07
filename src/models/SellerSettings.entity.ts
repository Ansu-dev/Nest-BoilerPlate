import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Seller } from "./Seller.entity";


@Entity({ name: 'SellerSettings' })
export class SellerSetting {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Seller, (seller) => seller.sellerSetting, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    seller: Seller

    @Column()
    agreeThirdParty?: boolean

    @Column()
    agreeReceiveEmail?: boolean

    @Column()
    agreeReceiveText?: boolean

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<SellerSetting>) {
        Object.assign(this, partial);
    }
}