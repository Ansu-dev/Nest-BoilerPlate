import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product.entity";
import { TemplateRow } from "./TemplateRow.entity";

@Entity({ name: 'TemplateColumns' })
export class TemplateColumn {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    englishName: string

    @ManyToOne(() => TemplateRow, (row) => row.column, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    row: TemplateRow

    @ManyToMany(() => Product, (product) => product.id)
    @JoinTable({
        name: 'Products-TemplateOptions',
        joinColumn: { name: 'columnId' },
        inverseJoinColumn: { name: 'productId' }
    })
    product: Product[]

    constructor(partial: Partial<TemplateColumn>) {
        Object.assign(this, partial);
    }
}