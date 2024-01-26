import { Link } from 'react-router-dom';
import ProductCard from '../Components/product-card';

const Home = () => {

  const addToCartHandler = () => { };

  return (
    <div className='home'>

      <section>

      </section>

      <h1>
        Latest Products
        <Link to='/search' className='findmore'>
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          productId='rwer'
          name='iphone'
          price={222}
          handler={addToCartHandler}
          stock={232}
          photo='https://tse1.mm.bing.net/th?id=OIP.AGy2OUk-ox8DxAmRRRa4rQHaHa&pid=Api&P=0&h=180' />
      </main>

    </div>
  )
}

export default Home