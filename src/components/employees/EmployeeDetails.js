import React, { Fragment } from 'react';
import Axios from "axios";
import {Link} from "react-router-dom";

class EmployeeDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedEmployee : {},   // ID lu data Anedi Object vundi
            errorMessage : ''  // Error Vaste
        }
    }

    componentDidMount() {
        // id from the url
        let employeeId = this.props.match.params.id;         // 1
        let dataURL = `https://gist.githubusercontent.com/anavenirajkumar/77c84a1f054aa4f17d9623c3b33ce7b9/raw/b9dd693e29e45d3b986c95e08e92056a5bac85bc/Employees`;
        Axios.get(dataURL).then((response) => {
           let employees = response.data;                         // 2
           let selectedEmployee = employees.find((employee) => {    // 3
               return employee.login.uuid === employeeId           // 4
           });
           this.setState({
               selectedEmployee : selectedEmployee
           });
        }).catch((err) => {
            this.setState({
                errorMessage : err
            });
        });
    }

    render() {
        return (
            <Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <p className="h3 text-primary">Employee Details</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus et fuga hic laborum non obcaecati sunt! Ab animi, aspernatur assumenda blanditiis cumque delectus deserunt dicta dignissimos dolores esse facilis fugit id iusto labore libero modi officia quos repudiandae tenetur voluptas!</p>
                    </div>
                    <div className="row">
                        <div className="col">
                            {
                                Object.keys(this.state.selectedEmployee).length !== 0 ?  // Object Data Available lo Vunte True, False
                                    <Fragment>
                                        <div className="card">
                                            <div className="card-header bg-primary text-white">
                                                <p className="h4">{this.state.selectedEmployee.name.title} {this.state.selectedEmployee.name.first} {this.state.selectedEmployee.name.last}</p>
                                            </div>
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col-md-4">
                                                        <img src={this.state.selectedEmployee.picture.large} className="img-fluid img-thumbnail d-block m-auto"/>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <ul className="list-group">
                                                            <li className="list-group-item list-group-item-primary">
                                                                Age : {this.state.selectedEmployee.dob.age} Yrs.
                                                            </li>
                                                            <li className="list-group-item list-group-item-primary">
                                                                Email : {this.state.selectedEmployee.email}
                                                            </li>
                                                            <li className="list-group-item list-group-item-primary">
                                                                City : {this.state.selectedEmployee.location.city}
                                                            </li>
                                                            <li className="list-group-item list-group-item-primary">
                                                                State : {this.state.selectedEmployee.location.state}
                                                            </li>
                                                            <li className="list-group-item list-group-item-primary">
                                                                Phone : {this.state.selectedEmployee.phone}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <Link to="/employees" className="btn btn-primary btn-sm">Back</Link>
                                            </div>
                                        </div>
                                    </Fragment> : null
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default EmployeeDetails;
