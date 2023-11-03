import React from 'react'
import Typed from "react-typed";

const HeroPage = () => {
    const staticText = "Software Consulting and Development";

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            minHeight: "80vh",
            color: "white",
            fontWeight: "bolder",
            fontSize: "40px",
          }}
        >
          <div className="text-center">
            <h1 className="display-4">{staticText}</h1>
            <h2>
              <span>We </span>
              <div
                className="typed-input"
                style={{
                  backdropFilter: "blur(10px)",
              backgroundColor: "transparent",
       display: "inline-block",
                  minWidth: "200px",
                  padding: "5px",
                  border: "1px solid white",
                  color: "darkblue",
                  borderRadius:"10px"
                }}
              >
                <Typed
                  strings={[
                    "drive",
                    "safeguard",
                    "power",
                    "streamline",
                    "encourage",
                  ]}
                  typeSpeed={100}
                  backSpeed={100}
                  loop
                />
              </div>{" "}
              digital success
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPage