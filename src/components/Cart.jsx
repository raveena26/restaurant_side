import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart";


const Cart = () => {

    const cartVal=useSelector(state=>state.cartValues);
    const dispatch =useDispatch();

    const handleEmptyCart=()=>{
        dispatch(cartActions.emptyCart());
    }

    const handleRemoveFromCart=(item)=>{
        dispatch(cartActions.removeFromcart(item));
    }    
  return <div>CART

    {cartVal.cartItems.map((cI,index)=>{
        return <div key={index}>
        
       <p>
            {cI.name} "Quantity: " {cI.quantity}  "Price: " {cI.qprice}
        </p>
        <button onClick={()=>{handleRemoveFromCart(cI)}}>Remove from Cart</button>
        </div>
    })}

<div> Total Price :{cartVal.totalPrice} </div>
    <button onClick={()=>{handleEmptyCart()}}>Empty Cart</button>
  </div>;
};

export default Cart;
