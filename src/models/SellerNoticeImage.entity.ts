import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SellerNotice } from "./SellerNotice.entity";

@Entity({ name: 'SellerNoticeImages' })
export class SellerNoticeImage {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 255, nullable: true })
    originalImageName: string

    @Column({ length: 255, nullable: true })
    imagePath: string

    @ManyToOne(() => SellerNotice, (notice) => notice.image, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    notice: SellerNotice

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<SellerNoticeImage>) {
        Object.assign(this, partial);
    }
}