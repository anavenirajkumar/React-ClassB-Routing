import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Home from "./components/home/Home";
import Employees from "./components/employees/Employees";
import Stocks from "./components/stocks/Stocks";
import About from "./components/about/About";
import EmployeeDetails from "./components/employees/EmployeeDetails";
import StockDetails from "./components/stocks/StockDetails";


class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
               <Router>
                   <Navbar/>

                   <Switch>
                       <Route exact path="/" component={Home}/>
                       <Route exact path="/employees" component={Employees}/>
                       <Route exact path="/employees/:id" component={EmployeeDetails}/>
                       <Route exact path="/stocks" component={Stocks}/>
                       <Route exact path="/stocks/:id" component={StockDetails}/>
                       <Route exact path="/about" component={About}/>
                   </Switch>

               </Router>
            </div>
        );
    }

}
export default App;
