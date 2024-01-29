import { useState } from "react";
import { VscError } from "react-icons/vsc";
import Cartitems from "../Components/cart-items";
import { Link } from "react-router-dom";
const cartItems = [
  {productId:'as',
  photo:"https://imgs.search.brave.com/UrsPfJU4g7uUgTtzdKOIZLOUPXx_d2ogoNSPOh3D-QI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MTczMzY3MTQ3MzEt/NDg5Njg5ZmQxY2E4/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OGJX/RmpZbTl2YXlVeU1I/QnliM3hsYm53d2ZI/d3dmSHg4TUE9PQ.jpeg",
  name:"mac",
  price:453,
  quantity:4,
  stock:10,
}
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingChanrges = 200;
const total = subtotal + tax + shippingChanrges;
const discount = 0;
const Cart = () => {
  const [coupon,SetCoupon]=useState<string>('');
  const [isvalidcoupon,SetisvalidCoupon]=useState<boolean>(true);
  return (
    <div className='cart'>
      <main>
      {cartItems.length > 0 ?(cartItems.map((i,idx)=>{return <Cartitems key={idx} cartItem={i}/>})):<h1>No Items Added Yet</h1>}
      </main>

      <aside>
        <p>SubTotal : ₹{subtotal}</p>
        <p>Shipping Chanrges : ₹{shippingChanrges}</p>
        <p>Tax : ₹{tax}</p>
        <p>
          Discount : <em> - ₹{discount}</em>
        </p>
        <p>
          <b>
            Total : ₹{total}
          </b>
        </p>

        <input type="text" placeholder="Coupon" value={coupon} onChange={(e)=>{SetCoupon(e.target.value)}} />

        {
          coupon && (isvalidcoupon ?<span className="green">₹{discount} off using the coupon code <code>{coupon}</code></span> :<span className="red">Invalid Coupon Code <VscError></VscError></span>)
        }

        {cartItems.length > 0 ? <Link to={'/shipping'}>Checkout</Link>:''}
      </aside>
    </div>
  )
}

export default Cart