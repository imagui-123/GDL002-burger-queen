import React, {Component} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Switch} from "react-router-dom";
import Navbar from "./components/navbar";
import Default from "./components/Default";
import Kitchen from "./components/kitchen";
import ProductList from "./components/ProductList";
import config from "./firebase";
import firebase from "firebase"

class App extends Component {
    render() {
      //  firebase.initializeApp(config);
      return (
        <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component= {ProductList}/>
         <Route path="/kitchen" component={Kitchen} ></Route>
          <Route component={Default} />
        </Switch>
      </React.Fragment>
      );
    }
  }

  export default App;
