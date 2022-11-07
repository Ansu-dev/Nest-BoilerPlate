import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Product } from "./Product.entity";
import { ProductGroup } from './ProductGroup.entity';



@Entity({ name: 'ProductGroups-Products' })
export class ProductGroupProduct {
    @ManyToOne(() => Product, (product) => product.productGroupProduct, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @PrimaryColumn()
    @JoinColumn()
    product: Product

    @ManyToOne(() => ProductGroup, (group) => group.productGroupProduct, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @PrimaryColumn()
    @JoinColumn()
    productGroup: ProductGroup


    constructor(partial: Partial<ProductGroupProduct>) {
        Object.assign(this, partial);
    }
}