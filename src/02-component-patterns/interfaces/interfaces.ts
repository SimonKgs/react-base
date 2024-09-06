import { Props as ProductCardProps } from "../components/ProductCard";
import { ProductTitleProps } from "../components/ProductTitle";
import { ProductImgProps } from "../components/ProductImage";
import { ProductButtonsInterface } from "../components/ProductButtons";

export interface Product {
    title: string;
    img?: string;
    id: string;
}


export interface ProductContextProps {
    product: Product;
    increaseBy: (value: number) => void ,
    counter: number,
}



export interface ProductCardHOCProps {
        ({ children, product }: ProductCardProps): JSX.Element;  
        Title: ( Props: ProductTitleProps) => JSX.Element;
        Image: ( Props: ProductImgProps) => JSX.Element;
        Buttons: (Props: ProductButtonsInterface) => JSX.Element;
}