import React from "react";

const Travel = props => (
  <figure>
    <img src={props.image} alt={props.country} />
    <figcaption>
      <cite>{props.destination} {props.country}<br></br>{props.distance}</cite>
    </figcaption>
  </figure>
);

export default Travel; 