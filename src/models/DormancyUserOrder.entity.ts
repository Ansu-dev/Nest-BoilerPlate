import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'DormancyUserOrder'})
export class DormancyUserOrder {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    orderId: number

    @Column()
    userId: number

    @Column({ length: 50, nullable: true, unique: true })
    paymentUid: string

    @Column({ type: 'json', nullable: true })
    info: any

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    constructor(partial: Partial<DormancyUserOrder>) {
        Object.assign(this, partial);
    }
}