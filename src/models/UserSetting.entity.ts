import { User } from './User.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'UserSettings' })
export class UserSetting {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    agreeThirdParty: boolean

    @Column()
    agreeReceiveEmail: boolean

    @Column()
    agreeReceiveText: boolean

    @OneToOne(() => User, (user) => user.setting, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    user: User

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<UserSetting>) {
        Object.assign(this, partial);
    }
}