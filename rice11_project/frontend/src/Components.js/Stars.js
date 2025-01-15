import React from "react";
import { FaStar } from "react-icons/fa";


function Stars() {
    const stars = [1, 2, 3, 4, 5];
  return (
    <div style={{ display: "flex", gap: "5px" }}>
    {stars.map((star, index) => (
      <FaStar
        key={index}
        size={13}
        color={index < 4 ? "orange" : "black"} // Full orange for first 4 stars
        style={{
          fill: index < 4 ? "orange" : "none", // Outline for the last star
          stroke: index < 4 ? "orange" : "black",
          strokeWidth: "10",
        }}
      />
    ))}
  </div>
  )
}

export default Stars


