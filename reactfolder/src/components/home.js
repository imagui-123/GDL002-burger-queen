import React, {Component} from 'react';

class home extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      currentItem: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  render(){
    return (
      <div>
        <header>
            <div className='wrapper'>
              <h1>Fun Food Friends</h1>
              
            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
              <form>
                <input type="text" name="username" placeholder="What's your name?"  onChange={this.handleChange} value={this.state.username}  />
                <input type="text" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange} value={this.state.currentItem} />
                <button>Add Item</button>
              </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
              </ul>
            </div>
          </section>
        </div>
      </div>
      
    );
  };
}  
  export default home;