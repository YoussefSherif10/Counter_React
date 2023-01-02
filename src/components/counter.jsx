import React, {Component} from "react";

class Counter extends Component {
    // state is a special object that contains any data that component needs
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3'],
    };

    render() {
        // jsx expressions must have one parent to it
        return (
            // we use React Fragment instead of div to make the components not wrapped by other
            // div just the root one
            // braces used for dynamic rendering
            // class attribute is className as class is a reserved word in js
            <React.Fragment>
                <span className={this.classes()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">increment</button>
                <ul>
                    {this.state.tags.length === 0 && <p>Please Add New Tag !</p>}
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </React.Fragment>
        );
    }

    handleIncrement = () => {
        /* this function handles the increment of the counter. this gets passed by reference
        * so I am making it arrow function to set this value to the class */
        this.setState({count: this.state.count + 1}); // override the state with the new value
    }

    classes() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;   // this.state destruction to avoid repetition
        return count === 0 ? <h1>Zero</h1> : count; // jsx expressions are just like normal js
    }
}

export default Counter;