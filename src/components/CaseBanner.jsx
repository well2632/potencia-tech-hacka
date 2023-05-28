import React from "react";

function CaseBanner({ img_url, title, description, to_path }) {
  return (
    <div className=" flex items-center justify-center">
      <div
        className=" w-[95%] m-auto rounded flex items-end justify-center bg-white/10  h-[350px] bg-center"
        style={{ backgroundImage: `url(${img_url})` }}
      >
        <span className="text-sm text-white p-4 bg-black/70">
          <b>{title}:</b> {description}
        </span>
      </div>
    </div>
  );
}

export default CaseBanner;
