import React from "react";

function Breadcrumb({ items }) {
  return (
    <div className="flex gap-2 text-white">
      <span>Inicio</span>
      {items.map((element) => (
        <>
          <span>{">"}</span>
          <span>{element}</span>
        </>
      ))}
    </div>
  );
}

export default Breadcrumb;
