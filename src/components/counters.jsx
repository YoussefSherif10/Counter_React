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
            {id: 1 , value: 4},
            {id: 2 , value: 0},
            {id: 3 , value: 0},
            {id: 4 , value: 0},
        ],
    };

    render() {
        return (
            <div>
                {this.state.counters.map(counter =>
                    <Counter key={counter.id} onDelete={this.handleDelete} counter={counter} />)}
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
}

export default Counters;