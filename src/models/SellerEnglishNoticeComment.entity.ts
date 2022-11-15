import { SellerEnglishNoticeCommentReply } from './SellerEnglishNoticeCommentReply.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Seller } from "./Seller.entity";
import { SellerEnglishNotice } from "./SellerEnglishNotice.entity";

@Entity({ name: 'SellerEnglishNoticeComments' })
export class SellerEnglishNoticeComment {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 1000 })
    content: string

    @Column({ default: false })
    secret: boolean

    @ManyToOne(() => Seller, (seller) => seller.englishNoticeComment, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    seller: Seller

    @ManyToOne(() => SellerEnglishNotice, (notice) => notice.noticeComment, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    notice: SellerEnglishNotice

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date


    @OneToMany(() => SellerEnglishNoticeCommentReply, (reply) => reply.comment, { cascade: true })
    commentReply: SellerEnglishNoticeCommentReply

    constructor(partial: Partial<SellerEnglishNoticeComment>) {
        Object.assign(this, partial);
    }
}