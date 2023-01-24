import ItemCards from "./ItemCards";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";
import { useNavigate } from "react-router-dom";
import { url } from "../GlobalConstants";
const FoodMenu = () => {
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetch(url+"/foodmenu")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          setFoodItems(data);
        });
    }
    fetchData();
  }, []);

const handleAddToCart=(foodItm)=>{
    dispatch(cartActions.addToCart(foodItm))
}

  return (
    <div
      style={{
        display: "inline-block",
        fontFamily: "cursive",
        fontSize: "larger",
      }}
    >
      Food Menu
      {foodItems.map((foodItem, idx) => {
        return (
          <div key={idx}>
            <ItemCards>
              {foodItem.name}<br />
              Rs. {foodItem.price}
              <br />
              <button
                style={{
                  borderRadius: "10px",
                  height: "30px",
                  margin: "15px",
                  cursor: "pointer",
                }}

                onClick={()=>{handleAddToCart(foodItem)}}
              >
                Add Item to Cart
              </button>
            </ItemCards>
          </div>
        );
      })}
      <div
        style={{
          position: "fixed",
          top: "12px",
          right: "40px",
          textDecoration: "underline",
          color: "Blue",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/cart");
        }}
      >
        Go to Cart
      </div>
    </div>
  );
};

export default FoodMenu;
