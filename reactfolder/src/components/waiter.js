import React, {Component} from 'react';
import firebase from "firebase";



export default class Waiter extends Component{
    
    constructor() {
        super();

        this.state = {
          username: '',
          currentItem: '',
          items:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


      handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

      handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref('items');
        const item = {
          title: this.state.currentItem,
          user: this.state.username
        }
        itemsRef.push(item);
        this.setState({
          currentItem: '',
          username: ''
        });
      }

      componentDidMount() {
        firebase.initializeApp(config);
        const itemsRef = firebase.database().ref('items');
        itemsRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
          for (let item in items) {
            newState.push({
              id: item,
              title: items[item].title,
              user: items[item].user
            });
          }
          this.setState({
            items: newState
          });
        });
      }

      removeItem(itemId) {
        const itemRef = firebase.database().ref(`/items/${itemId}`);
        itemRef.remove();
      }

      render(){
        return (
          <div>
            <header>
                <div className='wrapper'>
                  
                </div>
            </header>
            <div className='container'>
              <section className='add-item'>
                  <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" placeholder="What's your name?" autoComplete="off" onChange={this.handleChange} value={this.state.username}  />
                {/* <input type="text" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange} value={this.state.currentItem} />*/}
                    <button>OK</button>
                  </form>
              </section>
              <section className='display-item'>
                <div className='wrapper'>
                  <ul>
                  {this.state.items.map((item) => {
                    return (
                      <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>Attended by: {item.user}
                          <button onClick={() => this.removeItem(item.id)}>Remove Item</button>
                        </p>
                      </li>
                    )
                  })}
                  </ul>
                </div>
              </section>
            </div>
          </div>
          
        );
      };
}