import { Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Product } from "./Product.entity";
import { ProductGroup } from './ProductGroup.entity';
import 'reflect-metadata'


@Entity({ name: 'ProductGroups-Products' })
export class ProductGroupProduct {
    @PrimaryColumn()
    productId: number

    @PrimaryColumn()
    productGroupId: number

    @ManyToOne(() => Product, (product) => product.productGroupProduct, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    product: Product

    @ManyToOne(() => ProductGroup, (group) => group.productGroupProduct, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    productGroup: ProductGroup


    constructor(partial: Partial<ProductGroupProduct>) {
        Object.assign(this, partial);
    }
}