import { Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";
import { UserGroup } from "./UserGroup.entity";
import 'reflect-metadata'


@Entity({ name: 'UserGroups-Users' })
export class UserGroupUser {
    @PrimaryColumn()
    userId: number

    @PrimaryColumn()
    userGroupId: number

    @ManyToOne(() => User, (user) => user.userGroupUser, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    user: User

    @ManyToOne(() => UserGroup, (group) => group.userGroupUser, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    userGroup: UserGroup


    constructor(partial: Partial<UserGroupUser>) {
        Object.assign(this, partial);
    }
}