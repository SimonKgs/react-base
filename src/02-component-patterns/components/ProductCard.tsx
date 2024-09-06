import styles from '../styles/styles.module.css'
import { useCounter } from '../hooks/useCounter';
import { createContext, ReactElement, CSSProperties } from 'react';
import { ProductContextProps, Product } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext

export interface Props {
    product: Product;
    children: ReactElement | ReactElement [];
    className?: string;
    style?: CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {

    const { counter, increaseBy } = useCounter()

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
        <div 
            className={ `${styles.productCard} ${ className }` }
            style={ style }
        >

            { children }
        
        </div>
        </Provider>
    )
}
