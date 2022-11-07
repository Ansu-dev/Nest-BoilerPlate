import { SellerEnglishNoticeComment } from './SellerEnglishNoticeComment.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Seller } from "./Seller.entity";

@Entity({ name: 'SellerEnglishNoticeCommentReply' })
export class SellerEnglishNoticeCommentReply {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 1000 })
    content: string

    @Column({ default: false })
    secret: boolean

    @ManyToOne(() => Seller, (seller) => seller.englishNoticeCommentReply, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    seller: Seller

    @ManyToOne(() => SellerEnglishNoticeComment, (comment) => comment.commentReply, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    comment: SellerEnglishNoticeComment

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<SellerEnglishNoticeCommentReply>) {
        Object.assign(this, partial);
    }
}