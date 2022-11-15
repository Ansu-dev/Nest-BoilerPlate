import { SellerSaleInfo } from './SellerSaleInfo.entity';
import { Product } from './Product.entity';
import { SellerNoticeComment } from './SellerNoticeComment.entity';
import { SellerQna } from './SellerQna.entity';
import { SellerLedger } from './SellerLedger.entity';
import { SellerMinorFile } from './SellerMinorFile.entity';
import { SellerSetting } from './SellerSettings.entity';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { SellerInfo } from "./SellerInfo.entity";
import { SellerFile } from './SellerFiles.entity';
import { SellerNotice } from './SellerNotice.entity';
import { SellerEnglishNotice } from './SellerEnglishNotice.entity';
import { SellerNoticeCommentReply } from './SellerNoticeCommentReply.entity';
import { SellerEnglishNoticeComment } from './SellerEnglishNoticeComment.entity';
import { SellerEnglishNoticeCommentReply } from './SellerEnglishNoticeCommentReply.entity';
import { SellerGroup } from './SellerGroup.entity';
import { ProductSupportComment } from './ProductSupportComment.entity';
import { SellerPopbillAccount } from './SellerPopbillAccount.entity';
import { SellerLiked } from './SellerLiked.entity';
import { SellerStatus } from './enum/enum';
import { TemporaryProduct } from './TemporaryProduct.entity';

@Entity({ name: 'Sellers' })
export class Seller {
    @PrimaryColumn()
    id: number

    @Column({ length: 50, unique: true })
    email: string

    @Column({ length: 255 })
    password: string

    @Column({ length: 255 })
    phone: string

    @Column({ length: 255, default: 'South Korea' })
    nationality: string

    @Column({ type: 'enum', enum: SellerStatus, default: SellerStatus.required })
    status: SellerStatus

    @Column({ default: true })
    registType: boolean

    @Column({ default: true })
    enable: boolean

    @Column({ length: 1000 })
    validMsg: string

    @Column({ default: 0 })
    likedCount: number

    @UpdateDateColumn({ type: 'timestamp' })
    lastLoginAt: Date

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    @OneToOne(() => SellerInfo, (info) => info.seller, { cascade: true })
    sellerInfo: SellerInfo

    @OneToOne(() => SellerSetting, (setting) => setting.seller, { cascade: true })
    sellerSetting: SellerSetting

    @OneToOne(() => SellerFile, (file) => file.seller, { cascade: true })
    sellerFile: SellerFile

    @OneToOne(() => SellerMinorFile, (minor) => minor.seller, { cascade: true })
    sellerMinor: SellerMinorFile

    @OneToMany(() => SellerLedger, (ledger) => ledger.seller, { cascade: true })
    ledger: SellerLedger[]

    @OneToMany(() => SellerQna, (qna) => qna.seller)
    qna: SellerQna[]

    @ManyToMany(() => SellerNotice, (notice) => notice.id)
    @JoinTable({
        name: 'NoticeNotRead',
        joinColumn: { name: 'sellerId' },
        inverseJoinColumn: { name: 'noticeId' }
    })
    notRead: SellerNotice[]

    @ManyToMany(() => SellerEnglishNotice, (notice) => notice.id)
    @JoinTable({
        name: 'EnglishNoticeNotRead',
        joinColumn: { name: 'sellerId' },
        inverseJoinColumn: { name: 'noticeId' }
    })
    englishNotRead: SellerEnglishNotice[]

    @OneToMany(() => SellerNoticeComment, (comment) => comment.seller)
    noticeComment: SellerNoticeComment[]

    @OneToMany(() => SellerNoticeCommentReply, (reply) => reply.seller)
    noticeCommentReply: SellerNoticeCommentReply[]

    @OneToMany(() => SellerEnglishNoticeComment, (comment) => comment.seller)
    englishNoticeComment: SellerEnglishNoticeComment[]

    @OneToMany(() => SellerEnglishNoticeCommentReply, (reply) => reply.seller)
    englishNoticeCommentReply: SellerEnglishNoticeCommentReply[]

    @OneToMany(() => Product, (product) => product.seller)
    product: Product[]

    @OneToMany(() => ProductSupportComment, (comment) => comment.seller)
    supportComment: ProductSupportComment[]

    @OneToMany(() => SellerGroup, (group) => group.seller, { cascade: true })
    sellerGroup: SellerGroup

    @OneToOne(() => SellerPopbillAccount, (popbill) => popbill.seller, { cascade: true })
    popbill: SellerPopbillAccount

    @OneToOne(() => SellerSaleInfo, (saleInfo) => saleInfo.seller, { cascade: true })
    saleInfo: SellerSaleInfo

    @OneToMany(() => SellerLiked, (liked) => liked.seller, { cascade: true })
    likedUsers: SellerLiked[]

    @OneToOne(() => TemporaryProduct, (temp) => temp.seller, { cascade: true })
    temp: TemporaryProduct

    constructor(partial: Partial<Seller>) {
        Object.assign(this, partial);
    }
}