import { User } from './User.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'UserSettings' })
export class UserSetting {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    agreeWebPush: boolean

    @Column({ nullable: true })
    agreeWebPushDate: Date

    @Column()
    agreeThirdParty: boolean

    @Column({ nullable: true })
    agreeThirdPartyDate: Date

    @Column()
    agreeReceiveEmail: boolean

    @Column({ nullable: true })
    agreeReceiveEmailDate: Date

    @Column()
    agreeReceiveText: boolean

    @Column({ nullable: true })
    agreeReceiveTextDate: Date

    @OneToOne(() => User, (user) => user.setting, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    user: User

    constructor(partial: Partial<UserSetting>) {
        Object.assign(this, partial);
    }
}