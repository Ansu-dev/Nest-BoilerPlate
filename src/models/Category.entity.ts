import { ProductGroup } from './ProductGroup.entity';
import { TemplateRow } from './TemplateRow.entity';
import { Product } from './Product.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent } from "typeorm";

@Entity({ name: 'Categories' })
@Tree('materialized-path')
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 40 })
    categoryName: string

    @Column({ length: 40 })
    englishCategoryName: string

    @TreeChildren()
    children?: Category[]

    @TreeParent({ onDelete: 'SET NULL' })
    parent?: Category

    @OneToMany(() => Product, (product) => product.category)
    product: Product[]

    @OneToMany(() => ProductGroup, (productGroup) => productGroup.category)
    productGroup: ProductGroup

    @ManyToMany(() => TemplateRow, (row) => row.id)
    @JoinTable({
        name: 'Categories-TemplateRows',
        joinColumn: { name: 'categoryId' },
        inverseJoinColumn: { name: 'rowId' }
    })
    row: TemplateRow[]

    constructor(partial: Partial<Category>) {
        Object.assign(this, partial);
    }
}