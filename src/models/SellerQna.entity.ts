import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Seller } from "./Seller.entity";


@Entity({ name: 'SellerQna' })
export class SellerQna {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 2000 })
    question: string

    @Column({ length: 2000, nullable: true })
    answer: string

    @Column({ default: true })
    status: boolean

    @ManyToOne(() => Seller, (seller) => seller.qna, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    seller: Seller

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<SellerQna>) {
        Object.assign(this, partial);
    }
}