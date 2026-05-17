import RestaurantCard from "./Restaurant";
import resObj from "../utils/mockData";
import { useState, useEffect }from "react";
import Shimmer from "./Shimmer";

export const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);

     useEffect(()=>{
        fetchData();
    },[]);
    
const fetchData = async () => {
  try {
    const response = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    console.log("Aman",data);

    const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants 
      || data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      || data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      || [];
    setListOfRestaurant(restaurants);
  } catch (error) {
    console.log("ERROR:", error);
  }
};

    return listOfRestaurant.length === 0 ? <Shimmer/> : (
      <div className = "body">
          <div className="filter">
            <button className="filter-btn" onClick={() => {
                const filteredList = listOfRestaurant.filter(res => res.info.avgRatingString > 4.0);
                setListOfRestaurant(filteredList);
            } }>Top Rated Restaurant</button> 
          </div>
          <span className="Search">
            <input type="text" className= "search" placeholder="Search Restaurant" onChange={(event) => {
                    let searchText = event.target.value;
                    if(searchText === "") {
                      setListOfRestaurant(resObj);
                      return;
                    }
                    const filteredList = listOfRestaurant.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setListOfRestaurant(filteredList);
            }}/> 
          </span>
          <div className="res-container"> 
             { 
             // Key is important and it has to be there >> index can be used if key is not there 
               listOfRestaurant.map((res) => {
                 return <RestaurantCard key={res.info.id} resData = {res}/>
              })
            }
          </div>
      </div>
  )
};

export default Body;