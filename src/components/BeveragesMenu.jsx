import ItemCards from "./ItemCards";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";
import { url } from "../GlobalConstants";
const BeveragesMenu = () => {
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const [beverageItems, setBeverageItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetch(url+"/beveragemenu")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          setBeverageItems(data);
        });
    }
    fetchData();
  }, []);


  const handleAddToCart=(bevItm)=>{
    dispatch(cartActions.addToCart(bevItm))
}

  return (
    <div
      style={{
        display: "inline-block",
        fontFamily: "cursive",
        fontSize: "larger",
      }}
    >
      Beverages Menu
      {beverageItems.map((bevItem, idx) => {
        return (
          <div key={idx}>
            <ItemCards>
              {bevItem.name}<br />
              Rs. {bevItem.price}
              <br />
              <button
                style={{
                  borderRadius: "10px",
                  height: "30px",
                  margin: "15px",
                  cursor: "pointer",
                }}
                onClick={()=>{handleAddToCart(bevItem)}}
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

export default BeveragesMenu;
