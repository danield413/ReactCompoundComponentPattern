import { ReactElement } from "react";

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    product: Product;
    counter: number;
    increaseBy: (value: number) => void;
}

// OPCIONAL
// export interface ProductCardHOCProps {
//     ({ children, product }: ProductCardProps) : JSX.Element,
//     Title: ReactElement,
//     Image: ReactElement,
//     Buttons: ReactElement,
// }