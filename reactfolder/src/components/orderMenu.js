import React from 'react';
import BreakfastM from '../components/waiter';
import MenuForm from './waiterForm';
import AddCart from './addCart';


class OrderMenu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            orders:[],
            value:""
        }
        this.addName=this.addName.bind(this);
        this.addOrders=this.addOrders.bind(this);
    }
    addName(value){
        this.setState({
            value
        });
    }

    addOrders(orders){
        this.setState({
            orders
        });
    }

    removeItem=(event,index)=>{
        event.preventDefault();
        this.state.orders.splice(index,1);
        this.setState({div:this.state.orders});
    }
    render(){
       
        return(
           
            <div>
           
             
                <MenuForm  addName={this.addName}/>
             
                <div>
                    <BreakfastM addOrders={this.addOrders}/>
                </div>
                {
                    this.state.orders.map((orders,index)=>
                   
                    <div className="col" key={index}>
                    
                    <h3> {orders.item}</h3>
                    <h3>Precio {orders.price}</h3>
                    <button onClick={(event)=>this.removeItem(event, index)}>Eliminar</button>
                     </div>
                    )}
            </div>
        )
    }
}
export default OrderMenu;