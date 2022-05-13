import React from "react";
import { useLocation } from "react-router-dom";

function DetailPage() {
  const { state } = useLocation();
  return (
    <div className="UNX__container">
      <div className="UNX__image__container">
        <img src={`${state.imageUrl}`}></img>
      </div>

      <div className="UNX__content__container">
        <div className="UNX__product__title">{state.title}</div>
        <div className="UNX__product__price__container">
          <div className="UNX__product__price">{state.salePrice}</div>
          <div className="UNX__Inclusive__tax">INCLUSIVE ALL TAXES</div>
        </div>

        <div className="UNX__size__container">
          <h3 class>Select Size</h3>
          {state.size.map((elm,index) => {
            return <div key={index} className="UNX__product__size">{elm}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
