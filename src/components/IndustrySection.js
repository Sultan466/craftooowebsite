import React from "react";
import "./IndustrySection.css";
import { logos } from "../constants";
import { FaArrowRight } from "react-icons/fa";
const IndustrySection = () => {
  return (
    <div className="wrapper">
      <div className="info">
        <h1 className="heading">Industry Expertise</h1>
        <div className="divider"></div>
        <p className="description">
          We’ve excelled our experience in a wide range of industries to bring
          valuable insights and provide our customers with the truly beneficial
          solutions.
        </p>
      </div>
      <div className="content">
        {logos.map((item) => {
          return (
            <>
              <div className="box" key={item.id}>
                <div className="box-content">
                  <FaArrowRight className="arrow" />
                  <img src={item.icon} alt="img" />
                  <h3 className="title">{item.title}</h3>
                </div>
                <div className="slider"></div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default IndustrySection;
