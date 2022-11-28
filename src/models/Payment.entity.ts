import { Order } from './Order.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Currency, PaymentStatus } from './enum/enum';



@Entity({ name: 'Payments' })
export class Payment {
    @PrimaryGeneratedColumn()
    id: string

    @Column({ length: 50, nullable: true, unique: true })
    paymentUid: string

    @Column()
    paymentType: string

    @Column()
    paymentMethod: string

    @Column({ type: 'enum', enum: PaymentStatus })
    status: PaymentStatus

    @Column({ type: 'double' })
    amount: number

    @Column({ type: 'double', default: 0 })
    cancelledAmount: number

    @Column({ type: 'json', nullable: true })
    info: any

    @Column({ type: 'json', nullable: true })
    refundInfo: any

    @OneToOne(() => Order, (order) => order.payment, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    order: Order

    @Column({ type: 'enum', enum: Currency, default: Currency.KRW })
    currency: Currency

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<Payment>) {
        Object.assign(this, partial);
    }
}