import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SellerNoticeType } from "./enum/enum";
import { SellerNoticeComment } from "./SellerNoticeComment.entity";
import { SellerNoticeImage } from "./SellerNoticeImage.entity";


@Entity({ name: 'SellerNotices' })
export class SellerNotice {
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

    @OneToMany(() => SellerNoticeImage, (image) => image.notice, { cascade: true })
    image: SellerNoticeImage

    @OneToMany(() => SellerNoticeComment, (comment) => comment.notice, { cascade: true })
    noticeComment: SellerNoticeComment

    constructor(partial: Partial<SellerNotice>) {
        Object.assign(this, partial);
    }
}