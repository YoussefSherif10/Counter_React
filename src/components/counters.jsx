import React, {Component} from "react";
import Counter from "./counter";

class Counters extends Component {
    render() {
        return (
            <main>
            <div className="col-lg-8 mx-auto p-4 py-md-5">
                <button onClick={this.props.onReset} className="btn btn-primary btn-lg">Reset</button>
                {this.props.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={this.props.onDelete}
                        counter={counter}
                        onIncrement={this.props.onIncrement}
                    />)}
            </div>
            </main>
        );
    }

}

export default Counters;