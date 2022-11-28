import { ProductSupport } from './ProductSupport.entity';
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductReview } from "./ProductReview.entity";
import { UserSetting } from './UserSetting.entity';
import { UserAccount } from './UserAccount.entity';
import { UserCart } from './UserCart.entity';
import { Point } from './Point.entity';
import { UserCoupon } from './UserCoupon.entity';
import { ProductLiked } from './ProductLiked.entity';
import { SellerLiked } from './SellerLiked.entity';
import { AccountStatus, Currency } from './enum/enum';
import { UserGroupUser } from './UserGroup-User.entity';
import { UserMail } from './UserMail.entity';



@Entity({ name: 'Users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 50, unique: true })
    email: string

    @Column({ length: 255 })
    password: string

    @Column({ length: 50 })
    name: string

    @Column({ length: 255 })
    phone: string

    @Column({ length: 255 })
    birth: string

    @Column({ default: '' })
    gender: string

    @Column({ length: 255 })
    profile: string

    @Column({ length: 100, nullable: true })
    recommendCode: string

    @Column({ length: 255, default: 'South Korea' })
    nationality: string

    @Column({ type: 'double', default: 0 })
    purchaseAmount: number

    @Column({ default: 0 })
    purchaseCount: number

    @Column({ type: 'double' })
    myPoint: number

    @Column()
    userCode: string

    @Column({ default: 0 })
    loginCount: number

    @Column({ default: 0 })
    reviewCount: number

    @Column({ default: 0 })
    boardCount: number

    @Column({ default: 0 })
    supportCount: number

    @Column({ default: 0 })
    commentCount: number

    @Column({ type: 'enum', enum: AccountStatus, default: AccountStatus.enable })
    accountStatus: AccountStatus

    @Column({ type: 'enum', enum: Currency, default: Currency.KRW })
    currency: Currency

    @Column({ nullable: true })
    lastLoginAt: Date

    @Column({ nullable: true })
    lastPurchaseAt: Date

    @Column({ nullable: true })
    withdrawalDate: Date

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    @OneToMany(() => ProductReview, (review) => review.user, { cascade: true })
    review: ProductReview[]

    @OneToMany(() => ProductSupport, (support) => support.user, { cascade: true })
    productSupport: ProductSupport[]

    @OneToOne(() => UserSetting, (setting) => setting.user, { cascade: true })
    setting: UserSetting

    @OneToOne(() => UserMail, (mail) => mail.user, { cascade: true })
    mail: UserMail

    @OneToMany(() => UserAccount, (account) => account.user, { cascade: true })
    account: UserAccount[]

    @OneToMany(() => UserCart, (cart) => cart.user, { cascade: true })
    cart: UserCart[]

    @OneToMany(() => Point, (point) => point.user, { cascade: true })
    usePoint: Point[]

    @OneToMany(() => UserCoupon, (coupon) => coupon.user, { cascade: true })
    userCoupon: UserCoupon[]

    @OneToMany(() => ProductLiked, (liked) => liked.user, { cascade: true })
    likedProducs: ProductLiked[]

    @OneToMany(() => SellerLiked, (liked) => liked.user, { cascade: true })
    likedSellers: SellerLiked[]

    @OneToMany(() => UserGroupUser, (uu) => uu.user, { cascade: true })
    userGroupUser: UserGroupUser[]


    constructor(partial: Partial<User>) {
        Object.assign(this, partial);
    }
}