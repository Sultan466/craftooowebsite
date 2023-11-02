import React from "react";
import "../CSS/SolutionsSection.css";
import SolutionsCard from "./SolutionsCard";
import { SolutionsCardData } from "../data/SolutionsCardData";

const SolutionsSection = () => {
  return (
    <>
      <div className="SolutionSectionContainer container-fluid p-5">
        <h1 className="h1 text-white">Solutions We Deliver</h1>
        <div className="divider bg-warning"></div>
        <p className="text-white mt-3">
          We IT-enable all kinds of B2B, B2C interactions and internal
          operations.
        </p>

        {/* cards */}
        <div className="row g-4">
          {SolutionsCardData.map((cardData) => {
            return (
              <div className="col-lg-3 col-md-4 col-12">
                <a
                  href="http://www.google.com"
                  className="text-decoration-none"
                  target="_blank"
                >
                  <SolutionsCard cardTitleProp={cardData.title} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SolutionsSection;
