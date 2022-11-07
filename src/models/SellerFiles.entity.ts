import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Seller } from "./Seller.entity";

@Entity({ name: 'SellerFiles' })
export class SellerFile {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 255, nullable: true })
    certificateOriginalName: string

    @Column({ length: 255, nullable: true })
    certificatePath: string

    @OneToOne(() => Seller, (seller) => seller.sellerFile, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    seller: Seller

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<SellerFile>) {
        Object.assign(this, partial);
    }
}