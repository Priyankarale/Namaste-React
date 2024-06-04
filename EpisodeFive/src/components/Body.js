import { resObj } from "../utlis/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {
  const [listOfRestaurants,setListOfRestruant]=useState(resObj)
  return (
    <div className="body">
      <div className="filter-btn">
        <button onClick={()=>{
          console.log("filter")
          const filteData=listOfRestaurants.filter(
            (res)=>res.info.avgRating>4
          );
          setListOfRestruant(filteData);
        }}>To Rated Restaurant</button>
      </div>
      <div className="rest-container">
        {listOfRestaurants.map((resto) => (
          <RestaurantCard key={resto.info.id} resData={resto} />
        ))}
      </div>
    </div>
  );
};
export default Body;
