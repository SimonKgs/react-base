import { CSSProperties, useContext } from "react"

import noImage from '../assets/no-image.jpg'

import styles from '../styles/styles.module.css'

import { ProductContext } from "./ProductCard"

export interface ProductImgProps {
    img?: string,
    className?: string,
    style?: CSSProperties;

}

export const ProductImage = ({ img, className, style}: ProductImgProps) => {

    const { product } = useContext(ProductContext)
    
    const imgToShow: string = (img ? img : (product.img) ? product.img : noImage)

    return (
        <img 
            className={ `${ styles.productImg } ${ className }` } 
            src={ imgToShow } alt="Coffee Mug"
            style={ style }
        />
    )

}