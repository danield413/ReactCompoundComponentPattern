import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/ProductCard"

const product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png',
}


export const Shoppingpage = () => {
  return (
    <div>
        <h1>Shopping Page</h1>
        <hr />

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
          <ProductCard product={product}>
            <ProductCard.Image  />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </ProductCard>

          <ProductCard product={product}>
            <ProductImage  />
            <ProductTitle />
            <ProductButtons />
          </ProductCard>
          
        </div>
    </div>
  )
}
