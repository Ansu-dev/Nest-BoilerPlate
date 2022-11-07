import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BannerGroup } from "./BannerGroup.entity";

@Entity({ name: 'Banners' })
export class Banner {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 50 })
    name: string

    @Column()
    no: number

    @Column({ default: false })
    isGlobal: boolean

    @Column({ default: '' })
    type: string

    @Column()
    desktop: boolean

    @Column({ length: 255 })
    originalName: string

    @Column({ length: 255 })
    path: string

    @Column({ length: 255 })
    linkPath: string

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    @ManyToMany(() => BannerGroup, (group) => group.id)
    @JoinTable({
        name: 'Banners-BannerGroups',
        joinColumn: { name: 'bannerId' },
        inverseJoinColumn: { name: 'groupId' }
    })
    group: BannerGroup

    constructor(partial: Partial<Banner>) {
        Object.assign(this, partial);
    }
}