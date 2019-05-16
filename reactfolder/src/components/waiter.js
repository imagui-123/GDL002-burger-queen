import React from "react";
import BreakfastMenu from '../components/breakfastm.json'


class BreakfastM extends React.Component {
 
  constructor (props) {
    super(props);
    this.state = {
      orders:[]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(menuName, price) {
    const orders=this.state.orders;
    const order={
      item: menuName,
      price: price
    }
    orders.push(order);
    this.props.addOrders(this.state.orders);
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-2">
        <div className="card">
         {BreakfastMenu.map((menuDetail, index)=>
           <div className="card" key={index}>
              <div className="card-body">
              <img src={menuDetail.image} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">{menuDetail.name}</h5>
                <p className="card-text">{menuDetail.price}</p>
                <button  className="btn btn-primary" onClick={()=>{ this.handleSubmit(menuDetail.name, menuDetail.price)}} type="submit"> Add +</button>
              </div>
            </div>
            </div>
         )}
      </div>
      </div>
      </div>
    )
  }

}
export default BreakfastM;


