import React from "react";
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <div className="container">
                        <Link to="/" className="navbar-brand">React Routing</Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item px-2">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link to="/employees" className="nav-link">Employees</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link to="/stocks" className="nav-link">Stocks</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link to="/about" className="nav-link">About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}
export default Navbar;
