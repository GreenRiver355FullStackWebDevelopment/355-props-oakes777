import { restaurants } from "../data/data.js";

import Restaurant from "./Restaurant.jsx";

//Higher-Order Components
function RestaurantsContainer(props) {
  return (
    <div className="restaurantContainer">
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} key={restaurant.id} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;
