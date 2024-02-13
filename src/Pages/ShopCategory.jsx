import React ,{ useContext}from 'react'
import "./CSS/ShopCategory.css"
import {ShopContext} from "../Context/ShopContext"
 import dropdown_icon from "../Components/Assets/dropdown_icon.png"
 import Item from "../Components/Item/Item"
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
        <img  className="shop-category-banner"src={props.banner} alt=""></img>
        
         <div className='shopCategory-indexSort'>
<p>
  <span>showing 1-12</span>out of 36 products
</p>

<div className='shopCategory-sort'>
sort by <img  onClick={()=>{return <h1>puja</h1>}}  src={dropdown_icon} alt="" ></img> 
</div>


  </div>
<div className='shopCategory-products'>
{all_product.map((item,i)=>{
  if(props.category===item.category){
return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
  }else{
    return null;
  }
})}
        </div>

        <div className='shopCategory-loadmore'>
Explore More
        </div>
    </div>
  )
}

export default ShopCategory