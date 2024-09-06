import { CSSProperties, useContext } from "react"

import styles from '../styles/styles.module.css'
import { ProductContext } from "./ProductCard"

export interface ProductButtonsInterface {
    className?: string;
    style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: ProductButtonsInterface) => {

    const { counter, increaseBy } = useContext(ProductContext) 

    return (
        <div 
            className={ `${ styles.buttonsContainer } ${ className }` }
            style={ style }
        >

            <button onClick={ () => increaseBy(-1)} className={ styles.buttonMinus }>-</button>

            <div className={ styles.countLabel }> { counter }</div>

            <button onClick={ () => increaseBy(1)}  className={ styles.buttonAdd }>+</button>

        </div>
    )
} 