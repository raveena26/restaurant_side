import food from "../assets/json/food.json"

const FoodMenu = () => {
  return <div>Food Menu

    {food.map((foodItem,idx)=>{
        return <div key={idx}>
            {foodItem.name}
            </div>

    })}


  </div>;
};

export default FoodMenu;
