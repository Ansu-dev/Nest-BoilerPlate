import { Coupon } from './Coupon.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from './User.entity';

@Entity({ name: 'UserCoupons' })
export class UserCoupon {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (user) => user.userCoupon, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    user: User

    @ManyToOne(() => Coupon, (coupon) => coupon.userCoupon, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    coupon: Coupon

    @Column({ default: true })
    status: boolean

    @Column({ default: false })
    expireMsg: boolean

    @Column({ nullable: true })
    useTime: Date

    @Column({ nullable: true })
    expire: Date

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<UserCoupon>) {
        Object.assign(this, partial);
    }
}