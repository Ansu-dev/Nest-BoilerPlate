import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Category } from "./Category.entity";
import { Coupon } from "./Coupon.entity";
import { ProductGroupProduct } from './ProductGroup-Product.entity';



@Entity({ name: 'ProductGroups' })
export class ProductGroup {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 20 })
    name: string

    @Column({ length: 100 })
    subName: string

    @Column()
    groupType: string

    @Column({ default: false })
    isGlobal: boolean

    @Column({ nullable: true })
    webImage: string

    @Column({ nullable: true })
    mobileImage: string

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date

    @OneToMany(() => Coupon, (coupon) => coupon.publishTarget)
    coupon: Coupon

    @ManyToOne(() => Category, (category) => category.productGroup)
    @JoinColumn()
    category: Category

    @OneToMany(() => ProductGroupProduct, (pp) => pp.productGroup)
    productGroupProduct: ProductGroupProduct[]

    constructor(partial: Partial<ProductGroup>) {
        Object.assign(this, partial);
    }
}