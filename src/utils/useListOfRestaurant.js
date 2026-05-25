import {useEffect , useState} from "react";


const useListOfRestaurant = () => {

    const [restList,setRestList] = useState([]);
    //fetch Logic.
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
  try {
    await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Aman", data);
        const restaurants =
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants ||
          data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants ||
          [];
        console.log("Restaurants:", restaurants);
        setRestList(restaurants);
      });
  } catch (error) {
    console.log("ERROR:", error);
  }
};

  return restList;
};
export default useListOfRestaurant;
