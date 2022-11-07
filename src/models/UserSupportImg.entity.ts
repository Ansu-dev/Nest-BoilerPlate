import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserSupport } from "./UserSupport.entity";

@Entity({ name: 'UserSupportImgs' })
export class UserSupportImg {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 255, nullable: true })
    originalName: string

    @Column({ length: 255, nullable: true })
    path: string

    @ManyToOne(() => UserSupport, (support) => support.img, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    userSupport: UserSupport

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<UserSupportImg>) {
        Object.assign(this, partial);
    }
}