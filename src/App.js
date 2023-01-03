import logo from './logo.svg';
import './App.css';
import Counters from "./components/counters";
import Navbar from "./components/navbar";
import {Component} from "react";

class App extends Component{
    state = {
        /* the component that contains the state should be the one to modify it. that's why we raise an event
         from Counter and handle the event here [handleDelete].
         implementation: we create handleDelete method and pass its reference as a prop. then in the child component
         we call it by reference.
         */
        counters: [
            {id: 1 , value: 0},
            {id: 2 , value: 0},
            {id: 3 , value: 0},
            {id: 4 , value: 0},
        ],
    };

  render() {
      return (
          <div className="App">
              <Navbar />
              <Counters
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
                  onReset={this.handleReset}
                  counters={this.state.counters}
              />
          </div>
      );
  }

    handleDelete = (counterId) => {
        /*const item = this.state.counters.find(counter => counter.id === counterId );
        const index = this.state.counters.indexOf(item);
        this.setState({counter: this.state.counters.splice(index, 1)});
         */

        const counters = this.state.counters.filter(counter => counter.id !== counterId);
        this.setState({ counters });
    }

    handleIncrement = (counter) => {
        /* this function handles the increment of the counter. this gets passed by reference
        * so I am making it arrow function to set this value to the class */
        // override the state with the new value

        const index = this.state.counters.indexOf(counter);
        counter.value++;
        const counters = [...this.state.counters];
        counters[index] = counter;
        this.setState({counters});

    }

    handleReset = () => {
        const counters = this.state.counters.map(counter => {counter.value = 0 ; return counter});
        this.setState({counters});
    }
}

export default App;
