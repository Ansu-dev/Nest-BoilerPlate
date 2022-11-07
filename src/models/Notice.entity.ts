import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


export enum NoticeType {
    notice = '기타',
    inspection = '정기점검',
    report = '트렌드 리포트',
    plan = '기획전',
}

@Entity({ name: 'Notices' })
export class Notice {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'enum', enum: NoticeType })
    type: NoticeType

    @Column({ length: 100 })
    title: string

    @Column({ type: 'longtext', nullable: null })
    content: string

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    constructor(partial: Partial<Notice>) {
        Object.assign(this, partial);
    }
}