import React from 'react';

class AddMenuForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value: "xxx"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
          value: event.target.value
        });
      }
    
      handleSubmit(event) {
        event.preventDefault();
        this.props.addName(this.state.value);
      }
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Mesero que atendio:
              <select variant="warning" value={this.state.value} onChange={this.handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </label>
            <input type="submit" value="Submit" placeholder="Enter" />
          </form>
        );
      }
}
export default AddMenuForm;