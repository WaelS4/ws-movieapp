import React from "react";

export const FiveStar = ({ rate }) => {
  return (
    <div>
      {[0, 1, 2, 3, 4].map((i, index) =>
        i < rate ? (
          <i className="fa fa-star" key={index} style={{ color: "orange" }}></i>
        ) : (
          <i className="fa fa-star" key={index}></i>
        )
      )}
    </div>
  );
};
