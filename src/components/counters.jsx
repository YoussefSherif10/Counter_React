import React from "react";
import Counter from "./counter";

const Counters = ({onReset, onIncrement, counters, onDelete, onDecrement}) => {
    return (
        <main>
            <div className="col-lg-8 mx-auto p-4 py-md-5">
                <button onClick={onReset} className="btn btn-primary btn-lg">Reset</button>
                {counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        counter={counter}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                    />)}
            </div>
        </main>
    );
}

export default Counters;