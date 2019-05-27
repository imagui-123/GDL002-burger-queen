import React from "react";
import Product from "./Product";
import {storeProducts} from '../data';
import { ProductConsumer } from "../context";
import {storeProductsL} from '../dataL.js'
import { ProductConsumerL } from "../contextL";

class FormMenu extends React.Component{
  state={
    products: storeProducts,
    products: storeProductsL
  };
  
  render(){
    console.log(storeProductsL);
    return(
      
      
<div className="container-fluid">

<div className="accordion" id="accordionExample">
  <div className="card1">
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Breakfast
        </button>
      </h2>
    </div> {/*header*/} 

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
      <ProductConsumer>
      {value =>{ 
         return value.products.map(product=>{
         return <Product key={product.id} product={product} />;
       });
     }}
     </ProductConsumer>  
          
      </div>
    </div> {/*collapseOne*/} 
  </div> {/*card 1*/} 
  <div className="card1">
    <div className="card-header" id="headingTwo">
      <h2 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         Lunch
        </button>
      </h2>
    </div> {/*header*/} 
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
       
      hola hola
      </div> {/**/} 
    </div> {/**/} 
  </div>  {/*card1*/} 
  </div> {/*acordion*/} 
</div> //fluid

    );
  }
}
export default FormMenu;