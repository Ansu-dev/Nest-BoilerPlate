import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";
import { UserSupportImg } from "./UserSupportImg.entity";



@Entity({ name: 'UserSupports' })
export class UserSupport {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 200 })
    title: string

    @Column({ type: 'text' })
    content: string

    @Column({ length: 2000, nullable: true })
    comment: string

    @Column({ default: true })
    status: boolean

    @ManyToOne(() => User, (user) => user.userSupport, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    user: User

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date


    @OneToMany(() => UserSupportImg, (img) => img.userSupport, { cascade: true })
    img: UserSupportImg

    constructor(partial: Partial<UserSupport>) {
        Object.assign(this, partial);
    }
}