import { ProductCard as ProductCardHoC } from "./ProductCard";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductCardHOCProps } from "../interfaces/interfaces";


export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHoC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
})

export default ProductCard