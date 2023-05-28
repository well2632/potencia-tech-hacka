import React from "react";
import { Tooltip } from "react-tooltip";

function Avatar({ name, id }) {
  return (
    <div className="w-[64px]">
      <img
        className="cursor-pointer"
        id={name}
        src={`/svg/avatar${id}.svg`}
        alt={`avatar ${name}`}
      />
      <Tooltip
        anchorSelect={`#${name}`}
        place="bottom"
        style={{
          backgroundColor: "#D9D9D9",
          color: "#000",
          borderRadius: "100px",
          padding: "4px 24px",
        }}
      >
        <button>{name}</button>
      </Tooltip>
    </div>
  );
}

export default Avatar;
