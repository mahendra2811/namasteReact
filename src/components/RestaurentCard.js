import { cloudinary_basic_link } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: '#f0f0f0',
        margin: '10px',
      }}
    >
      <img
        className="res-logo"
        // src={
        //   'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/' +
        //   resData.data.cloudinaryImageId
        // }
        src={cloudinary_basic_link + cloudinaryImageId}
        alt="Biryani le looo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes </h4>
      {/* <h3>{props.resName}</h3>
          <h4>{props.cuisine}</h4> */}
      {/* <h3>{resData.data.name}</h3>
        <h4>{resData.data.cuisines.join(', ')}</h4>
        <h4>{resData.data.avgRating} stars</h4>
        <h4>₹{resData.data.costForTwo / 100} FOR TWO</h4>
        <h4>{resData.data.deliveryTime} minutes</h4> */}
    </div>
  );
};

export default RestaurantCard;


