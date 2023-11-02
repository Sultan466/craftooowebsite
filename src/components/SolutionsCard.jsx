import React from "react";
import "../CSS/SolutionsSection.css";
import { FaArrowRight } from "react-icons/fa";


const SolutionsCard = ({ cardTitleProp, cardIdProp }) => {
  return (
    <div className="card rounded-0 card_container">
      <div className="card-body card_body d-flex justify-content-center align-items-center">
        <h5 class="card-title text-center">{cardTitleProp}</h5>
      </div>
      <span className="arrowIcon">
        <FaArrowRight />
      </span>
    </div>
  );
};

export default SolutionsCard;
