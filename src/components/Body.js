import RestaurantCard from "./Restaurant";
import resObj from "../utils/mockData";
import { useState, useEffect }from "react";

export const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([
  {
    "info": {
      "id": "733092",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/24/a05192d2-1044-482c-b4bd-b0afb1b60c42_733092.jpg",
      "name": "Caterspoint",
      "cuisines": [
        "Salads",
        "Healthy food",
        "Snacks",
        "pastas",
        "Lebanese",
        "Mexican",
        "Desserts",
        "Beverages"
      ],
      "avgRatingString": "4.4",
      "costForTwo": "₹500 for two"
    }
  },
  {
    "info": {
      "id": "621512",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/29ddfffe-7016-4548-ae60-1a8f348ffbe6_621512.jpg",
      "name": "The Belgian Waffle Co.",
      "cuisines": [
        "Waffle",
        "Desserts",
        "Ice Cream",
        "Beverages"
      ],
      "avgRatingString": "4.6",
      "costForTwo": "₹200 for two"
    }
  },
  {
    "info": {
      "id": "5934",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ac30c19f-5572-448a-9c6a-44be9d986625_5934.jpg",
      "name": "Burger King",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRatingString": "3.1",
      "costForTwo": "₹350 for two"
    }
  }
]);

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

    return(
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