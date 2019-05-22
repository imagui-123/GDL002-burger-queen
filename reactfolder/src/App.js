import React, {Component} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Switch} from "react-router-dom";
import Navbar from "./components/navbar";
import Default from "./components/Default";
import Details from "./components/Details";
import Kitchen from "./components/kitchen";
import Cart from "./components/Cart/cart";
import Modal from "./components/Modal";
 import ProductList from "./components/waiter";
import Helpers from './components/helpers';
// import ProductList from './components/waiterForm';
// <Route path="/kitchen" component= {Kitchen} />
class App extends Component {
    render() {
      return (
        <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component= {ProductList}/>
          <Route path="/details" component= {Details} />
          <Route path="/cart" component={Cart} />
         <Route path="/kitchen" component={Kitchen} ></Route>
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
      );
    }
  }

  export default App;
