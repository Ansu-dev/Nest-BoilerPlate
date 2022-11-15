import { SellerNoticeComment } from './SellerNoticeComment.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Seller } from "./Seller.entity";

@Entity({ name: 'SellerNoticeCommentReply' })
export class SellerNoticeCommentReply {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 1000 })
    content: string

    @Column({ default: false })
    secret: boolean

    @ManyToOne(() => Seller, (seller) => seller.noticeCommentReply, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    seller: Seller

    @ManyToOne(() => SellerNoticeComment, (comment) => comment.commentReply, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    comment: SellerNoticeComment

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<SellerNoticeCommentReply>) {
        Object.assign(this, partial);
    }
}