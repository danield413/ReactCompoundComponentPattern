import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import useProduct from '../hooks/useProduct'
import { ReactElement, createContext, useContext } from 'react';

interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
}

interface Product {
    id: string;
    title: string;
    img?: string;
}

interface ProductContextProps {
    product: Product;
    counter: number;
    increaseBy: (value: number) => void;
}

const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext; 

export const ProductImage = ({ img = '' }) => {

    const { product } = useContext(ProductContext);

    let imgToShow: string;

    if ( img ) {
        imgToShow = img;
    } else if ( product.img ) {
        imgToShow = product.img;
    } else {
        imgToShow = noImage;
    }

    return (
        <img className={ styles.productImg } src={ imgToShow } alt="Product image" />
    )
}

export const ProductTitle = ({ title = '' }) => {

    const { product } = useContext(ProductContext);

    return (
        <span className={ styles.productDescription }>{title ? title : product.title}</span>
    )
}

export const ProductButtons = () => {

    const { increaseBy, counter } = useContext(ProductContext);

    return (
        <div className={ styles.buttonsContainer }>
            <button className={ styles.buttonMinus } onClick={() => increaseBy(-1)}>
                -
            </button>

            <div className={ styles.countLabel }>{ counter }</div>

            <button className={ styles.buttonAdd } onClick={() => increaseBy(1)}>
                +
            </button>
        </div>
    )
}

export const ProductCard = ({ children, product }: Props) => {

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

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons