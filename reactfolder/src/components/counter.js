import React,{Component} from 'react'

class Counter extends Component {
    constructor(props){
       // super(props);
        this.state={
            count:0
        }
    }

handleDecrement=()=>{
    this.setState({
        count: this.state.count - 1
    });
};

    render(){
        return(
            <div className='center'>
                <p>{this.state.count}</p>
                <button>+</button>
                <button>-</button>
            </div>
        );
    };
};