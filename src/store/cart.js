import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: { cartItems: [],totalPrice:0 },
  reducers: {
    addToCart: (state, action) => {
        state.totalPrice=0;
       let itemExistIndex= state.cartItems.findIndex(c=>c.id===action.payload.id);
        if(itemExistIndex===-1){
            action.payload.quantity=1;
            action.payload.qprice=action.payload.price
            state.cartItems.push(action.payload);
        }else{
            state.cartItems[itemExistIndex].quantity+=1;
            state.cartItems[itemExistIndex].qprice=(state.cartItems[itemExistIndex].price)*(state.cartItems[itemExistIndex].quantity)
        }
   
        state.cartItems.forEach(ci=>{
            state.totalPrice=Number(state.totalPrice)+Number(ci.qprice);
        })
    },
    removeFromcart: (state, action) => {
        state.totalPrice=0;
        let itemExistIndex= state.cartItems.findIndex(c=>c.id===action.payload.id);
        if(state.cartItems[itemExistIndex].quantity>1){
            state.cartItems[itemExistIndex].quantity-=1;
            state.cartItems[itemExistIndex].qprice=(state.cartItems[itemExistIndex].qprice)-(state.cartItems[itemExistIndex].price)
        }else{
            state.cartItems=state.cartItems.filter(c=>c.id!==action.payload.id);
        }
        state.cartItems.forEach(ci=>{
            state.totalPrice=Number(state.totalPrice)+Number(ci.qprice);
        })
       
    },
    emptyCart: (state) => {
        state.cartItems=[]
        state.totalPrice=0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
