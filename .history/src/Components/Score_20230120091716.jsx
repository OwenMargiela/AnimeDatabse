import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Score({ score }) {
  return (
    <div className="Description__rating">
      {new Array(Math.floor(score)).fill(0).map((_, index) => (
        <FontAwesomeIcon icon="star"></FontAwesomeIcon>
      ))}

      {!Number.isInteger(score) && (
        <FontAwesomeIcon icon="star-half-alt"></FontAwesomeIcon>
      )}
    </div>
  );
}

export default Score;
