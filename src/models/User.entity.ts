import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



@Entity({ name: 'Users' })
export class User {
    @PrimaryGeneratedColumn()
    id: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @Column()
    name: string

    @Column()
    phone: string

    @Column()
    birth: string

    @Column({ default: '' })
    gender: string

    @Column()
    profile: string

    @Column()
    userCode: string

    @Column({ default: 0 })
    loginCount: number

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

    constructor(partial: Partial<User>) {
        Object.assign(this, partial);
    }
}