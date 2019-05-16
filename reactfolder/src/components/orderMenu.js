import React from 'react';
import BreakfastM from '../components/waiter';
import MenuForm from '../components/menuForm';

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
           
            <div >
            <div >
                
            </div>
            <div>
            <MenuForm  addName={this.addName}/>
            </div>
                <div>
                <BreakfastM addOrders={this.addOrders}/>
                </div>
                {this.state.orders.map((orders,index)=>
                    <div  key={index}>
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