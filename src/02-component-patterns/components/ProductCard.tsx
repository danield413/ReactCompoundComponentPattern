import styles from '../styles/styles.module.css'
import useProduct from '../hooks/useProduct'
import { createContext } from 'react';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext; 


export const ProductCard = ({ children, product }: ProductCardProps) => {

   const { counter, increaseBy } = useProduct(0)

    return (
        <Provider value={{
            product,
            counter,
            increaseBy
        }}>
            <div className={styles.productCard}>

                {children}
                
                {/* Separar en pequeños componentes */}
                {/* <ProductImage img={product.img} />

                <ProductTitle title={product.title} />

                <ProductButtons counter={counter} increaseBy={increaseBy} /> */}

            </div>
        </Provider>
    )
}