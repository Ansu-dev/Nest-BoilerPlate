import { UserGroup } from './UserGroup.entity';
import { UserCoupon } from './UserCoupon.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent, UpdateDateColumn } from "typeorm";
import { ProductGroup } from './ProductGroup.entity';
import { CouponType, Currency, DiscountType } from './enum/enum';




@Entity({ name: 'Coupons' })
@Tree('materialized-path')
export class Coupon {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => UserGroup, (userGroup) => userGroup.coupon, { nullable: true })
    @JoinColumn()
    publishTarget: UserGroup

    @ManyToOne(() => ProductGroup, (productGroup) => productGroup.coupon, { nullable: true })
    @JoinColumn()
    useTarget: ProductGroup

    @Column({ type: 'enum', enum: CouponType })
    type: CouponType

    @Column({ type: 'enum', enum: Currency, default: Currency.KRW })
    currency: Currency

    @Column({ length: 50, default: null })
    name: string

    @Column({ type: 'enum', enum: DiscountType })
    discountType: DiscountType

    @Column({ type: 'double', default: 0 })
    discount: number

    @Column({ type: 'double', default: 0 })
    maxDiscountPrice: number

    @Column({ type: 'double', default: 0 })
    minOrderPrice: number

    @Column({ type: 'timestamp', nullable: true })
    startDate: Date

    @Column({ type: 'timestamp', nullable: true })
    endDate: Date

    @Column({ type: 'int', default: 0 })
    count: number

    @Column({ length: 100, default: null })
    code: string

    @Column({ default: true })
    status: boolean

    @TreeChildren({ cascade: true })
    children?: Coupon[]

    @TreeParent({ onDelete: 'CASCADE' })
    parent?: Coupon

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    @OneToMany(() => UserCoupon, (userCoupon) => userCoupon.coupon, { cascade: true })
    userCoupon: UserCoupon

    constructor(partial: Partial<Coupon>) {
        Object.assign(this, partial);
    }
}