import RestaurantCard from "./Restaurant";
import resObj from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useListOfRestaurant from "../utils/useListOfRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
    // const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
    const [topRatedRestaurant,setTopRatedRestaurant] = useState(["Rating > 4.0"]);
    //  useEffect(()=>{
    //     fetchData();
    // },[]);
    const listOfRestaurant = useListOfRestaurant();

    // Sync filteredListOfRestaurants with listOfRestaurant when it loads/changes
    useEffect(() => {
      setFilteredListOfRestaurants(listOfRestaurant);
    }, [listOfRestaurant]);
// const fetchData = async () => {
//   try {
//     const response = await fetch(
//       "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
//     );
//     const data = await response.json();
//     console.log("Aman",data);

//     const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants 
//       || data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//       || data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//       || [];
//     setListOfRestaurant(restaurants);
//     setFilteredListOfRestaurants(restaurants);
//   } catch (error) {
//     console.log("ERROR:", error);
//   }
// };
  if(useOnlineStatus() === false) {
    return <h1>Looks like you are offline!! Please check your internet connection.</h1>
  }
    return listOfRestaurant.length === 0 ? <Shimmer/> : (
      <div className = "body">
          <div className="filter">
            <span className="Search">
            <input type="text" className= "search" placeholder="Search Restaurant" onChange={(event) => {
                    let searchText = event.target.value;
                    
                    if(searchText === "") {
                      setFilteredListOfRestaurants(listOfRestaurant);
                      return;
                    }
                    const filteredList = listOfRestaurant.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredListOfRestaurants(filteredList);
            }}/> 
          </span>
            <button className="filter-btn" onClick={() => {
                if (topRatedRestaurant === 'Rating > 4.0') {
                    setTopRatedRestaurant('All Restaurants');
                    setFilteredListOfRestaurants(listOfRestaurant);
                } else {
                   setTopRatedRestaurant('Rating > 4.0');
                   const filteredList = listOfRestaurant.filter(res => res.info.avgRatingString > 4.2);
                   setFilteredListOfRestaurants(filteredList);
                  }
            } }>{topRatedRestaurant}</button> 
          </div>
          
          <div className="res-container"> 
             { 
             // Key is important and it has to be there >> index can be used if key is not there 
               filteredListOfRestaurants.map((res) => {
                 return <RestaurantCard key={res.info.id} resData = {res}/>
              })
            }
          </div>
      </div>
  )
};

export default Body;