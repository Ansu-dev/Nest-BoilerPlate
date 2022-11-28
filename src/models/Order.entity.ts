import { Currency, Platform, OrderDevice } from './enum/enum';
import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { OrderProduct } from "./OrderProduct.entity";
import { Payment } from "./Payment.entity";
import { generateRandomCode } from 'src/utils/date';
import dayjs from 'dayjs';


@Entity({ name: 'Orders' })
export class Order {
    @PrimaryColumn({ type: 'bigint' })
    id: number

    @Column({ type: 'int' })
    orderCount: number

    @Column({ type: 'double' })
    usePoint: number

    @Column({ type: 'double' })
    useCoupon: number

    @Column({ type: 'int' })
    userId: number

    @Column({ length: 500, nullable: true })
    memo: string

    @Column({ type: 'double', default: 0 })
    amount: number

    @Column({ type: 'double', default: 0 })
    amountOrg: number

    @Column({ type: 'enum', enum: Currency, default: Currency.KRW })
    currency: Currency

    @Column({ type: 'enum', enum: OrderDevice })
    device: OrderDevice

    @Column({ type: 'enum', enum: Platform, default: Platform.ko })
    platform: Platform

    @Column({ default: 0 })
    couponId: number

    @Column({ default: 0 })
    pointId: number

    @Column({ default: false })
    pointStatus: boolean

    @Column({ nullable: true })
    paymentDate: Date

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order, { cascade: true })
    orderProduct: OrderProduct[]

    @OneToOne(() => Payment, (payment) => payment.order, { cascade: true })
    payment: Payment

    constructor(partial: Partial<Order>) {
        Object.assign(this, partial);
    }

    @BeforeInsert()
    createId(): void {
        const date = dayjs().format('YYYYMMDD')
        this.id = +`${date}${generateRandomCode(5)}`
    }
}