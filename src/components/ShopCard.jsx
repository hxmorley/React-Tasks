import ChangeState from "./ChangeName";
import React, { useState } from "react";


const ShopCard = ({ name, price, imageUrl }) => {

  let [isButtonPressed, setButtonName] = useState ("Add to Cart") 
// function newButtonName(){
// setButtonName("In Cart")
//   }
 
//   function oldButtonName(){
//     setButtonName("Add to cart")
//   }

  // function addCart () {
    // if (isButtonPressed === "Add to cart") isButtonPressed = newButtonName();
    // else isButtonPressed = oldButtonName();
  //}

  const addCart = () => {
    setButtonName(isButtonPressed === "Add to Cart" ? "In Cart" : "Add to Cart" )
  }

  return (
    <div className="wrapper">
      <img src={imageUrl} width={200} height={250} alt={name} title={name} />
      <h3 className="name">{name}</h3>
      <p className="price">£{price.toFixed(2)}</p>
      <button classname="add-cart-button" onClick={addCart}>
        {isButtonPressed}
      </button>
    </div>
  );
};

export default ShopCard;

//{itemsData.map((item) => (
//<div key={item.id}>
//<h1>{item.name}</h1>
//<h3>{item.price.toFixed(2)}</h3>
//<img className="card-image" src={item.imageUrl} alt="no pic"/>
//</div>
//))}
