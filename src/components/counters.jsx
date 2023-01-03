import React, {Component} from "react";
import Counter from "./counter";

class Counters extends Component {
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
            <div>
                <button onClick={this.handleReset} className="btn btn-primary btn-lg">Reset</button>
                {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        counter={counter}
                        onIncrement={this.handleIncrement}
                    />)}
            </div>
        );
    }

    //Event handler
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

export default Counters;