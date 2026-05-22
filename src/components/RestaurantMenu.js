import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url =
      "http://localhost:8010/proxy/webroutes/getPage?page_url=/pune/2bhk-diner-key-club-bund-garden/order&location=&isMobile=0";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(data?.page_data?.order?.menuList?.menus?.[0]?.categories[0]?.category?.items?.desc);
  };
  return(
    <div className="menu">
      <h1>Restaurant Name : MCD</h1>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </div>
  )
};

export default RestaurantMenu;

