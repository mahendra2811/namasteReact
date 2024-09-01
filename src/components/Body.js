import { useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurentCard";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { main_api } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import DinoGame from "../utils/DinoGame";


const Body = () => {
  const [listofRestaurent, setlistOfRestaurent] = useState([]);
  const[ filteredRestaurant , setFilteredRestaurant] = useState([]);

  // const [searchTexcxt, setSearchText]
  const[searchText , setSearchText] = useState('') ;   
// console.log("Body Rendered")

  useEffect(() => {
    fetchData();
    // console.log("hello data is fetched");
  }, []);

  const fetchData = async () => {
    const data = await fetch(main_api);
    // cors plugin and cors extension we use here 
    const json = await data.json();
    console.log(json.data.cards[1]);
    setlistOfRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus == false ) return(
    <div>
      return <DinoGame/>
    </div>
    
    // <h1>
    //   Looks like you are offline!!  , please check your internet connection ;
    // </h1>
  );

 

  return listofRestaurent === 0 ? <Shimmer/> : 
  (
    <div className="body">

      <div className="filter">


        <div className="search">
          <input type="text" 
          placeholder="Search restaurent you want...."
            className="search-box" 
            value={searchText}  
            onChange={(e)=>{
              setSearchText(e.target.value)
            }} 
          />
          <button onClick={()=>{
            // console.log(searchText) ; 
            const filteredRestaurant =  listofRestaurent.filter(
              (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase() ) );
              setFilteredRestaurant(filteredRestaurant);
            }} 
            >
             Search
          </button> 
        </div>


        <button className="filter-btn"
          onClick={() => {
            // filter logic lagana ha 
            const filteredList = listofRestaurent.filter(
              (res) => res.info.avgRating > 4.5
            );
            // console.log("restaurent is filtered fopr rating ");
            setlistOfRestaurent(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>


      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
         <Link key={restaurant.info.id}  to={"/restaurents/"+ restaurant.info.id  }  ><RestaurantCard  resData={restaurant} /></Link> 
        ))}


      </div>
    </div>
  );
};

export default Body;