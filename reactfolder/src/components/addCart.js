import React from 'react';

class AddCart extends React.Component{
    render(){
        return(
            <div className="car-body">
            <div className="card-title">
              <h1>  Shopping Cart <span class="badge" id='cartItems'></span></h1>
              <div className="cart" id = 'cart'>
              So lonely here, add something
              </div>
                  <div id = 'prices'></div>
            </div>
          </div>
  )
}
}
export default AddCart;