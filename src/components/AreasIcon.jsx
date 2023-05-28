import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

function AreasIcon({ course, id, image_path, to_path }) {
  return (
    <Link to={to_path || "#"} className="cursor-pointer">
      <div
        className="rounded-full w-[100px] h-[100px] bg-[#D9D9D9]/20 bg-cover"
        id={id}
        style={{ backgroundImage: image_path || "none" }}
      ></div>
      <Tooltip
        anchorSelect={`#${id}`}
        place="bottom"
        style={{
          backgroundColor: "#D9D9D9",
          color: "#000",
          borderRadius: "100px",
          padding: "4px 24px",
        }}
      >
        <button>{course}</button>
      </Tooltip>
    </Link>
  );
}

export default AreasIcon;
