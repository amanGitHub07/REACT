import { CDN_URL } from "../utils/constant";



const RestaurantCard = (resObj) =>{
  const {resData} = resObj;
  const {name,cuisines,avgRatingString,slaString,costForTwo,cloudinaryImageId} = resData?.info;
  console.log(resData);
  return (
    <div className = "res-card">
        <img className="res-logo" alt="Restaurant Logo" 
        src={ CDN_URL + cloudinaryImageId } >
        </img>
        <h3>{name}</h3>
        <h4>{cuisines.join(',')}</h4>
        <h4>{avgRatingString} stars</h4>
        <h4>{costForTwo}</h4>
    </div>
  )
};


export default RestaurantCard;