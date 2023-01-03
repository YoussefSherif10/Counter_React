import React from "react";

/* In order to make this component and Counters component in sync, we need to lift the state up.
so that the state will be contained in the App component then both Counters and Navbar components
can be controlled by it.

stateless functional component is used at simple components that just render jsx
it takes props as argument. we can destruct it using only the parameters that we need.
 */

const Navbar = ({countersNumbers}) => {
    return (
        <header className="bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
            <div className="container-fluid d-flex align-items-center">
                <h1 className="d-flex align-items-center fs-4 text-white mb-0">
                    Counters &emsp;
                </h1>
                <h2 className="d-flex align-items-center fs-4 text-white mb-0">
                    {countersNumbers}
                </h2>
            </div>
        </header>
    );
}

export default Navbar;