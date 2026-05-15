import React from "react";
import ReactDOM from "react-dom/client";


/*
1. HeaderComponent
  - Logo
  - Nav Items

2. Body
  - Search 
  - Restaurant Container
  - Restaurant Card
    - Image
    - Name
    - Cuisine
    - Rating
3. Footer
  - Links
  - Copyright
  - Contact
  - Address

  Always build from top level component.
*/

const HeaderComponent = () => {
  return (
    <div className = "header">
      <div className = "logo-container">
        <div className="logo">
          <img src="http://logodesign.net/logo-new/burger-with-fries-on-side-7182ld.png?nwm=1&nws=1&industry=burger-fries&txt_keyword=All" alt="logo" className="logo"/>
        </div>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
};

const resObj = [
                   {
                    "info": {
                      "id": "23678",
                      "name": "McDonald's",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/b9564130-be0f-4136-a8e1-6913cf24446d_23678.JPG",
                      "locality": "5th Block",
                      "areaName": "Koramangala",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "parentId": "630",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "66K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 1.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-15 03:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹549",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-85fb59cd-ee0f-4996-b987-4518c8be5aa2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/mcdonalds-5th-block-koramangala-rest23678",
                      "type": "WEBLINK"
                    }
                    },
                    {
                    "info": {
                      "id": "65797",
                      "name": "Leon's - Burgers & Wings (Leon Grill)",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg",
                      "locality": "Koramangala",
                      "areaName": "Koramangala",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "American",
                        "Snacks",
                        "Turkish",
                        "Portuguese",
                        "Continental"
                      ],
                      "avgRating": 4.3,
                      "parentId": "371281",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "60K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 1.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-15 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                            "description": "Best in Burger"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/62_Best%20in%20Local%20Gems2026.png",
                            "description": "Best in Local Gems"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Best in Burger",
                                  "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Local Gems",
                                  "imageId": "brand_cards/Badges%202026/62_Best%20in%20Local%20Gems2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.5",
                          "ratingCount": "5.1K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-85fb59cd-ee0f-4996-b987-4518c8be5aa2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/leons-burgers-and-wings-leon-grill-koramangala-rest65797",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "656392",
                      "name": "Subway",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/113d790a-4937-4b7a-a7d3-51cbbabdd50a_656392.jpg",
                      "locality": "1st Block",
                      "areaName": "Koramangala",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "sandwich",
                        "Salads",
                        "wrap",
                        "Healthy Food"
                      ],
                      "avgRating": 4.4,
                      "parentId": "2",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "5.3K+",
                      "sla": {
                        "deliveryTime": 20,
                        "lastMileTravel": 1.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "1.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-15 06:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                            "description": "EatRight"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/79_Best%20in%20Subs%20&%20Sandwiches2026.png",
                            "description": "Best in Subs & Sandwiches"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "EatRight",
                                  "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Subs & Sandwiches",
                                  "imageId": "brand_cards/Badges%202026/79_Best%20in%20Subs%20&%20Sandwiches2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹69"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-85fb59cd-ee0f-4996-b987-4518c8be5aa2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/subway-1st-block-koramangala-rest656392",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "59627",
                      "name": "La Pino'z Pizza",
                      "cloudinaryImageId": "ntjshqsv2k7vxtv7vmib",
                      "locality": "Koramangala",
                      "areaName": "Koramangala",
                      "costForTwo": "₹251 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "parentId": "4961",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "19K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 1.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-15 03:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹30"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.3",
                          "ratingCount": "2.1K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-85fb59cd-ee0f-4996-b987-4518c8be5aa2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/la-pinoz-pizza-koramangala-rest59627",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "381854",
                      "name": "ITC Sunfeast Baked Creations",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/5/12/84915178-0828-40d7-a280-c06e7adfff71_381854.JPG",
                      "locality": "Koramangala",
                      "areaName": "Koramangala",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "bakery",
                        "dessert",
                        "Cakes & Pastries",
                        "Sweets"
                      ],
                      "avgRating": 4.6,
                      "parentId": "12285",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "1.4K+",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 1.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-15 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.3",
                          "ratingCount": "43"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-85fb59cd-ee0f-4996-b987-4518c8be5aa2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/itc-sunfeast-baked-creations-koramangala-rest381854",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "439636",
                      "name": "Madno - House of Sundaes and Waffles",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/7/f153f8da-d93d-4aa2-8bf1-80da02dd42f8_439636.JPG",
                      "locality": "5th Block",
                      "areaName": "Koramangala",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts",
                        "Waffle"
                      ],
                      "avgRating": 3.7,
                      "veg": true,
                      "parentId": "264082",
                      "avgRatingString": "3.7",
                      "totalRatingsString": "356",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 1.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-15 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹69"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-85fb59cd-ee0f-4996-b987-4518c8be5aa2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/madno-house-of-sundaes-and-waffles-5th-block-koramangala-rest439636",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "442032",
                      "name": "Keventers Waffles & Ice Cream",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/13/0a0b692b-a53f-4c2a-81e0-526b61a0539f_442032.JPG",
                      "locality": "7th Block",
                      "areaName": "Koramangala",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "624796",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "388",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 1.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-05-15 05:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-85fb59cd-ee0f-4996-b987-4518c8be5aa2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/keventers-waffles-and-ice-cream-7th-block-koramangala-rest442032",
                      "type": "WEBLINK"
                    }
                  }
               ];

const RestaurantCard = (resObj) =>{
  const {resData} = resObj;
  console.log(resData);
  return (
    <div className = "res-card">
        <img className="res-logo" alt="Restaurant Logo" 
        src={"https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try-at-least-once/"
        + resData.cloudinaryImageId } >
        </img>
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(',')}</h4>
        <h4>{resData.info.avgRatingString}</h4>
        <h4>{resData.info.slaString}</h4>
    </div>
  )
};
const Body = () => {
  return(
      <div className = "body">
          <div className="search">
            Search 
          </div>
          <div className="res-container">
              <RestaurantCard resData = {resObj}/>
          </div>
      </div>
  )
};

const AppLayout = () => {
  return (
    <div className="app-layout">
      <HeaderComponent />
      <Body/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
