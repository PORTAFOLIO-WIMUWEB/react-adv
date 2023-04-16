import {ProductCard,  ProductButtons, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';
const product = {
    id: '1',
    title: ' Coffee Mug - Card',
    img: './coffee-mug.png'
}


const ShoppingPage = () => {
  return (
    <div>
          <h1>Shopping Store</h1>
          <hr />
          <div className="products-cards">

              <ProductCard product={product}>
                    <ProductCard.Image/>
                    <ProductCard.Title/>
                    <ProductCard.Buttons />
              </ProductCard>
              <ProductCard product={product}>
                    <ProductImage/>
                    <ProductTitle/>
                    <ProductButtons />
              </ProductCard>

          </div>
    </div>
  )
}

export default ShoppingPage
