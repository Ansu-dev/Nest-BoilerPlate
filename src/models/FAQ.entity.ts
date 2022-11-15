import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'FAQ' })
export class FAQ {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 100 })
    title: string

    @Column({ type: 'text' })
    content: string

    @Column()
    hidden: boolean

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<FAQ>) {
        Object.assign(this, partial);
    }
}