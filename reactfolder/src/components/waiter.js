import React, {Component} from 'react';


export default class Waiter extends Component{
    constructor(props){
        super(props);
        this.state={
           value:"Choose"
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            value:event.target.value
        });
    }

    handleSubmit(event, value){
        console.log('props', this.props.addWaiterName);
        
        event.preventDefault();
        this.props.addWaiterName(this.state.value);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>Waiter:</h2>
                <select variant="waiter" value={this.state.value} onClick={this.handleChange}>
                    <option value="Iris">Iris</option>
                    <option value="Mary">Mary</option>
                    <option value="Rosi">Rosi</option>
                </select>
                <input type="submit" value="Submit" />
               
            </form>
            
        )
    }
}