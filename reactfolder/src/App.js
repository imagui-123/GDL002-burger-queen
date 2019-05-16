import React from 'react';
import './App.css';
import {BrowserRouter,Route, Switch} from "react-router-dom";

// import Breakfast from './components/menuBreakfast';
//import CartButton from './components/productCard';
//import Menu from './components/menuBreakfast';
import Error from './components/error';
import Home from './components/home';
import Navigation from './components/navbar';
import Kitchen from './components/kitchen';
import Breakfastt from './components/waiter';
import Lunch from './components/lunchMenu';
import OrderMenu from './components/orderMenu';





class App extends React.Component{

    render(){
        return(
            <BrowserRouter>
            <div>
                <Navigation />      
            <Switch>
                <Route path="/" component ={Home} exact />
                
                <Route path="/waiter" component ={Breakfastt} exact />
                <Route path="/lunchMenu/" component ={Lunch} exact />
                <Route path="/kitchen" component ={Kitchen} exact />
                <Route  component ={Error} />
            </Switch>
            </div>
            
            </BrowserRouter>
        );
    }
};

 export default App;
