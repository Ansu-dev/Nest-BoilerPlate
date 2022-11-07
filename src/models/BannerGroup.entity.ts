import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'BannerGroups' })
export class BannerGroup {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 50 })
    name: string

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<BannerGroup>) {
        Object.assign(this, partial);
    }
}