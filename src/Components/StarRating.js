import React from "react";
import StarRatingComponent from "react-star-rating-component";

export default function StarRating(props) {
  return (
      <div>
          <StarRatingComponent
      name="rate2"
      editing={false}
      renderStarIcon={() => (
        <i
          className="fa fa-star"
          aria-hidden="true"
          style={{ fontSize: "16px", letterSpacing: "1.5px" }}
        ></i>
      )}
      starCount={5}
      value={props.rating}
      starColor={"#ffc741"}
      emptyStarColor={"#e0e0e0"}
    ></StarRatingComponent>
      </div>
    
  );
}
