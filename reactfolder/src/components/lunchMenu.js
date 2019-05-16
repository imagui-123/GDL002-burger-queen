import React from "react";
import LunchMenu from '../components/lunchm.json'

class LunchM extends React.Component {
  render(){
    return(
      <div className="col-md-6">
        {LunchMenu.map((menuDetail, index)=>
          <div className="card mt-4" key={index}> 
            <img src={menuDetail.image} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{menuDetail.name}</h5>
              <p className="card-text">{menuDetail.price}</p>
              <button href="#" className="btn btn-primary"> Add +</button>
            </div>
          </div>
       )}
      </div>
    )
  }

}
export default LunchM;
