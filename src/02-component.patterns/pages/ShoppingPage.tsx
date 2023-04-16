import {ProductCard,  ProductButtons, ProductImage, ProductTitle } from "../components"

import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: ' Coffee Mug - Card',
    img: './coffee-mug.png'
}


let ShoppingPage;

ShoppingPage = () => (<div>
    <h1>Shopping Store</h1>
    <hr />
    <div className="products-cards">

        <ProductCard product={product} className='bg-dark text-white'>
              <ProductCard.Image className='custom-image'/>
              <ProductCard.Title className='text-bold'/>
              <ProductCard.Buttons className='custom-button'/>
        </ProductCard>

        <ProductCard product={product} className='bg-dark text-white'>
              <ProductImage className='custom-image'/>
              <ProductTitle className='text-bold'/>
              <ProductButtons className='custom-button'/>
        </ProductCard>


        <ProductCard product={product} style={{backgroundColor:'#70D1F8'}}>
              <ProductImage  />
              <ProductTitle   />
              <ProductButtons />
        </ProductCard>

    </div>
</div>);

export default ShoppingPage
