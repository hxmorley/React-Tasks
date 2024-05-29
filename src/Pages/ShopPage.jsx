import '../App.css'
import ShopCard from "../components/ShopCard"
import itemsData from "../itemsData.json"




const ShopPage=() => {
  return (
    <>
    <h1 className="header">OUR PLANTS</h1>
    <div className="items-grid">
      {
        itemsData.map((item)=> (
          <ShopCard{...item}/>
        ))
      }
    </div>
    </>

);
}

export default ShopPage;

