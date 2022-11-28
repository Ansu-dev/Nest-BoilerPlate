import { Product } from './Product.entity';
import dayjs from 'dayjs';
import { BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Order } from "./Order.entity";
import { generateRandomCode } from 'src/utils/date';
import { OrderStatus } from './enum/enum';


@Entity({ name: 'OrderProducts' })
export class OrderProduct {
    @PrimaryColumn({ type: 'bigint' })
    id: number

    @Column({ type: 'int', default: 0 })
    amount: number

    @Column({ type: 'double', default: 0 })
    dollarAmount: number

    @ManyToOne(() => Order, (order) => order.orderProduct, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    order: Order

    @ManyToOne(() => Product, (product) => product.orderProduct, { onUpdate: 'CASCADE' })
    @JoinColumn()
    product: Product

    @Column({ nullable: true })
    downloadDate: Date

    @Column({ type: 'int', default: 0 })
    downloadCount: number

    @Column({ default: false })
    reviewStatus: boolean

    @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.stanby })
    orderStatus: OrderStatus

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<OrderProduct>) {
        Object.assign(this, partial);
    }

    @BeforeInsert()
    createId(): void {
        const date = dayjs().format('YYYYMMDD')
        this.id = +`${date}${generateRandomCode(6)}`
    }
}