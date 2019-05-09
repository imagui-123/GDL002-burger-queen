import React, {Component} from "react";
//import {slide as Menu} from "sideBar";

class App extends React.Component {
    render(){
    return(
        <div id="sideBar">
        {/* <header>welcome</header> */}
            {/* <SideBar pageWrapId={"page-wrap"} outerContainerId={"sideBar"} /> */}

            <div id="page-wrap">
                <h1>Cool Restaurant 🍔🍕</h1>
                <h2>Check out our offerings in the sidebar!</h2>
            </div>
        
        <div className="container">
        {/* <Menu> */}
            <a className="menu-item" href="/">
            Home
            </a>

            <a className="menu-item" href="/burgers">
            Burgers
            </a>

            <a className="menu-item" href="/pizzas">
            Pizzas
            </a>

            <a className="menu-item" href="/desserts">
            Desserts
            </a>
        {/* </Menu> */}
    </div>
    </div>
    );
   }

};
export default App;