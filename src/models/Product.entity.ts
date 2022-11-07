import { UserCart } from './UserCart.entity';
import { ProductSupport } from './ProductSupport.entity';
import { ProductReview } from './ProductReview.entity';
import { Category } from './Category.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductThumb } from './ProductThumb.entity';
import { ProductImage } from './ProductImage.entity';
import { ProductSale } from './ProductSale.entity';
import { Seller } from './Seller.entity';
import { HashTag } from './HashTag.entity';
import { ProductGroup } from './ProductGroup.entity';
import { TemplateColumn } from './TemplateColumn.entity';
import { OrderProduct } from './OrderProduct.entity';
import { ProductLiked } from './ProductLiked.entity';
import { ProductStatus } from './enum/enum';
import { ProductGroupProduct } from './ProductGroup-Product.entity';


@Entity({ name: 'Products' })
export class Product {
    @PrimaryColumn()
    id: number

    @Column()
    productName: string

    @Column()
    englishProductName: string

    @ManyToOne(() => Category, (category) => category.product)
    @JoinColumn()
    category: Category

    @ManyToOne(() => Seller, (seller) => seller.product)
    @JoinColumn()
    seller: Seller

    @Column({ type: 'double', default: 0 })
    discountRate: number

    @Column({ type: 'int' })
    priceOrg: number

    @Column({ type: 'int' })
    price: number

    @Column({ type: 'double', default: 0 })
    dollarPriceOrg: number

    @Column({ type: 'double', default: 0 })
    dollarPrice: number

    @Column({ type: 'int', default: 0 })
    totalSaleAmount: number

    @Column({ type: 'double', default: 0 })
    totalSaleDollarAmount: number

    @Column({ type: 'text', nullable: true })
    summary: string

    @Column({ type: 'longtext', nullable: true })
    detail: string

    @Column({ type: 'text', nullable: true })
    globalSummary: string

    @Column({ type: 'longtext', nullable: true })
    globalDetail: string

    @Column({ type: 'int', unsigned: true, default: 0 })
    likedCount: number

    @Column({ type: 'int', unsigned: true, default: 0 })
    reviewCount: number

    @Column({ type: 'int', unsigned: true, default: 0 })
    viewCount: number

    @Column({ type: 'double', unsigned: true, default: 0 })
    rating: number

    @Column({ default: 0 })
    saleCount: number

    @Column({ default: 0 })
    popular: number
    @Column({ default: true })
    global: boolean

    @Column({ default: true })
    domestic: boolean

    @Column({ default: false })
    webuddingOnly: boolean

    @Column({ type: 'enum', enum: ProductStatus, default: ProductStatus.registered })
    status: ProductStatus

    @Column({ default: false })
    free: boolean

    @Column({ length: 20 })
    firstCategory: string

    @Column({ length: 20 })
    secondCategory: string

    @Column({ length: 1000 })
    validMsg: string

    @Column({ default: 0 })
    thisSaleCount: number

    @Column({ default: 0 })
    thisReviewCount: number

    @Column({ default: 0 })
    thisPopular: number

    @CreateDateColumn({ type: 'timestamp', nullable: true })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updatedAt: Date

    @OneToMany(() => ProductThumb, (thumb) => thumb.product, { cascade: true })
    thumb: ProductThumb[]

    @OneToMany(() => ProductImage, (image) => image.product, { cascade: true })
    image?: ProductImage[]

    @OneToMany(() => ProductSale, (sale) => sale.product, { cascade: true })
    sale: ProductSale[]

    @OneToMany(() => HashTag, (hashtag) => hashtag.product, { cascade: true })
    hashtag?: HashTag[]

    @OneToMany(() => ProductReview, (review) => review.product, { cascade: true })
    review: ProductReview[]

    @OneToMany(() => ProductSupport, (support) => support.product, { cascade: true })
    support: ProductSupport[]

    @OneToMany(() => UserCart, (cart) => cart.product, { cascade: true })
    cart: UserCart

    @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.product, { cascade: true })
    orderProduct: OrderProduct[]

    @OneToMany(() => ProductLiked, (liked) => liked.product, { cascade: true })
    likedUsers: ProductLiked[]

    @OneToMany(() => ProductGroupProduct, (pp) => pp.product, { cascade: true })
    productGroupProduct: ProductGroupProduct[]


    @OneToMany(() => TemplateColumn, (column) => column.product, { cascade: true })
    templateColumn: TemplateColumn;


    constructor(partial: Partial<Product>) {
        Object.assign(this, partial);
    }
}
