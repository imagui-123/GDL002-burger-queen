import React, { Component } from "react";

export default class KitchenItem extends Component {
  render() {
    const { title, count } = this.props.item;
   

    return (
      <div className="row my-1 text-capitalize text-left">
       
        <div className="col-2 mx-auto col-lg-10 ">
          <span className="d-lg-none">product :</span> <h5> {title}</h5>
        </div>
       
        <div className="col-2 mx-auto col-lg-10 ">
          <div className="d-flex justify-content-sm-left">
        
              
              <span className="btn btn-black mx-1">{count}</span>
              
            
          </div>
        </div>
    </div>
        
    );
  }
}