import { FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";

type CartitemsProps = {

    cartItem:any;
}

const Cartitems = ({cartItem}:CartitemsProps) => {
    //     productId:'as',
    //   photo:"htt",
    //   name:"mac",
    //   price:453,
    //   quantity:4,
    //   stock:10,

    const { productId,photo,name,price,quantity}=cartItem;
  return (
    <div className="cart-items">
        <img src={photo} alt={name} />
        <article><Link to={`/prodcut/${productId}`}>{name}</Link></article>
        <span>₹{price}</span>

        <div>
            <button>-</button>
            <p>{quantity}</p>
            <button>+</button>
        </div>

        <div><button><FiTrash /></button></div>
    </div>
  )
}

export default Cartitems