import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AccountType } from "./enum/enum";
import { User } from "./User.entity";



@Entity({ name: 'UserAccounts' })
export class UserAccount {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'enum', enum: AccountType })
    type: AccountType

    @Column({ length: 100 })
    accountId: string

    @ManyToOne(() => User, (user) => user.account, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    user: User

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    constructor(partial: Partial<UserAccount>) {
        Object.assign(this, partial);
    }
}