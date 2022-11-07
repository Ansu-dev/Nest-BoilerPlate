import { User } from './User.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'UserMail' })
export class UserMail {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    dormancy: boolean

    @Column()
    withdrawal: boolean

    @OneToOne(() => User, (user) => user.mail, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    user: User

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<UserMail>) {
        Object.assign(this, partial);
    }
}