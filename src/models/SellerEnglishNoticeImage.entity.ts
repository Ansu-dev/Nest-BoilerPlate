import { SellerEnglishNotice } from './SellerEnglishNotice.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'SellerEnglishNoticeImage' })
export class SellerEnglishNoticeImage {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 255, nullable: true })
    originalImageName: string

    @Column({ length: 255, nullable: true })
    imagePath: string

    @ManyToOne(() => SellerEnglishNotice, (notice) => notice.image, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    notice: SellerEnglishNotice

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<SellerEnglishNoticeImage>) {
        Object.assign(this, partial);
    }
}