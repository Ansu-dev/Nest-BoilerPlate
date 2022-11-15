import { SellerNotice } from './SellerNotice.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Seller } from "./Seller.entity";
import { SellerNoticeCommentReply } from './SellerNoticeCommentReply.entity';

@Entity({ name: 'SellerNoticeComments' })
export class SellerNoticeComment {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 1000 })
    content: string

    @Column({ default: false })
    secret: boolean

    @ManyToOne(() => Seller, (seller) => seller.noticeComment, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    seller: Seller

    @ManyToOne(() => SellerNotice, (notice) => notice.noticeComment, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    notice: SellerNotice

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    @OneToMany(() => SellerNoticeCommentReply, (reply) => reply.comment, { cascade: true })
    commentReply: SellerNoticeCommentReply

    constructor(partial: Partial<SellerNoticeComment>) {
        Object.assign(this, partial);
    }
}