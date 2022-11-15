import { SellerEnglishNoticeComment } from './SellerEnglishNoticeComment.entity';
import { SellerEnglishNoticeImage } from './SellerEnglishNoticeImage.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SellerNoticeType } from './enum/enum';



@Entity({ name: 'SellerEnglishNotices' })
export class SellerEnglishNotice {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    no: number

    @Column({ type: 'enum', enum: SellerNoticeType })
    type: SellerNoticeType

    @Column({ length: 20 })
    writer: string

    @Column({ length: 100 })
    title: string

    @Column({ type: 'text' })
    content: string

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    @OneToMany(() => SellerEnglishNoticeImage, (image) => image.notice, { cascade: true })
    image: SellerEnglishNoticeImage

    @OneToMany(() => SellerEnglishNoticeComment, (comment) => comment.notice, { cascade: true })
    noticeComment: SellerEnglishNoticeComment

    constructor(partial: Partial<SellerEnglishNotice>) {
        Object.assign(this, partial);
    }
}