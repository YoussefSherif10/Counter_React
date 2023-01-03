import React, {Component} from "react";

/* In order to make this component and Counters component in sync, we need to lift the state up.
so that the state will be contained in the App component then both Counters and Navbar components
can be controlled by it.
 */

class Navbar extends Component {
    render() {
        return (
            <header className="bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
                <div className="container-fluid d-flex align-items-center">
                    <h1 className="d-flex align-items-center fs-4 text-white mb-0">
                        Counters
                    </h1>

                </div>
            </header>
        );
    }
}

export default Navbar;