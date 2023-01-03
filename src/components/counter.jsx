import React, {Component} from "react";

class Counter extends Component {
    /* state is a special object that contains any data that component needs
     the value is assigned only once when the instance is created.
     props of a component is used to transfer data among components and it is RO. while,
     state is private data
     controlled component doesn't have its local state but it takes all data from the props and raise
     events when data are needed to change.
     */

    render() {
        // jsx expressions must have one parent to it
        return (
            // we use React Fragment instead of div to make the components not wrapped by other
            // div just the root one
            // braces used for dynamic rendering
            // class attribute is className as class is a reserved word in js
            <div>
                <span className={this.classes()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)}
                        className="btn btn-secondary btn-lg">+
                </button>
                <button onClick={() => this.props.onDecrement(this.props.counter)}
                        className={this.decrementClasses()}>-
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)}
                        className="btn btn-danger btn-lg m-2">X
                </button>
            </div>
        );
    }

    classes() {
        let classes = "badge  m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;   // this.state destruction to avoid repetition
        return value === 0 ? <h1>Zero</h1> : value; // jsx expressions are just like normal js
    }

    decrementClasses () {
        return (this.props.counter.value === 0) ? "btn btn-dark btn-lg m-2" : "btn btn-secondary btn-lg m-2";
    }

}

export default Counter;