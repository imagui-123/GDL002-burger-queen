import React from "react";
// import Breakfast from '../components/waiter';
import Lunch from '../components/lunchMenu';
import OrderMenu from '../components/orderMenu';
import AddCart from '../components/addCart';

class FormMenu extends React.Component{
  render(){
    return(
<div className="container-fluid">
<div className="row">
<div className="col-md-12">
<div className="row">
<div className="col-md-6">
<div className="accordion" id="accordionExample">
  <div className="card1">
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Breakfast
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
            
            <OrderMenu/>
      </div>
    </div>
  </div>
  <div className="card1">
    <div className="card-header" id="headingTwo">
      <h2 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         Lunch
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
          <Lunch/>
          
      </div>
    </div>
  </div>
  </div>
  </div>
  <div className="row">
   <div className="col-md-6">
        <AddCart/>
    </div>
   </div>
</div>
</div>
</div>
</div>
 
    );
  }
}
export default FormMenu;