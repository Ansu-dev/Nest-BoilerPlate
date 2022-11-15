import { currentDateFormat, generateRandomCode } from "src/utils/date";
import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";


@Entity({ name: 'User' })
export class User {
    @PrimaryColumn()
    id: number

    @Column({ unique: true, nullable: false })
    email: string

    @Column({ length: 255 })
    password: string

    @Column({ length: 10 })
    name: string

    @Column({ length: 255 })
    phone: string

    @Column()
    department: string

    @Column()
    enabled: boolean

    @Column({ type: 'int', default: 0 })
    validCount: number

    @Column({ type: 'double' })
    dayOffCount: number

    @Column({ type: 'int' })
    joinDayCount: number

    @Column()
    joinDate: Date

    @Column({ length: 2000, nullable: true })
    memo: string

    @Column()
    createdAt: Date

    @Column()
    updatedAt: Date

    constructor(partial: Partial<User>) {
        Object.assign(this, partial);
    }

    @BeforeInsert()
    createId(): void {
        this.id = Number(`${currentDateFormat()}${generateRandomCode(3)}`)
    }

    @BeforeInsert()
    beforeInsertDate(): void {
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }
}
