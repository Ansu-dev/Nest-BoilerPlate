import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Seller } from "./Seller.entity";

@Entity({ name: 'SellerMinorFiles' })
export class SellerMinorFile {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 255, nullable: true })
    legalRepresentOriginalName: string

    @Column({ length: 255, nullable: true })
    legalRepresentPath: string

    @Column({ length: 255, nullable: true })
    familyOriginalName: string

    @Column({ length: 255, nullable: true })
    familyPath: string

    @Column({ length: 255, nullable: true })
    certificateOriginalName: string

    @Column({ length: 255, nullable: true })
    certificatePath: string

    @OneToOne(() => Seller, (seller) => seller.sellerMinor, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    seller: Seller

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<SellerMinorFile>) {
        Object.assign(this, partial);
    }
}