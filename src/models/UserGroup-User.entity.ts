
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User.entity";
import { UserGroup } from "./UserGroup.entity";



@Entity({ name: 'UserGroups-Users' })
export class UserGroupUser {
    @ManyToOne(() => User, (user) => user.userGroupUser, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @PrimaryColumn()
    @JoinColumn()
    user: User

    @ManyToOne(() => UserGroup, (group) => group.userGroupUser, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @PrimaryColumn()
    @JoinColumn()
    userGroup: UserGroup


    constructor(partial: Partial<UserGroupUser>) {
        Object.assign(this, partial);
    }
}