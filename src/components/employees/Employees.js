import React, { Fragment } from "react";
import Axios from "axios";
import {Link} from "react-router-dom";

class Employees extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            employees : [],  // Array of Object lo Data Vundi
            errorMessage : ''  // Errorvaste
        }
    }

    componentDidMount() {
        let dataURL = `https://gist.githubusercontent.com/anavenirajkumar/77c84a1f054aa4f17d9623c3b33ce7b9/raw/b9dd693e29e45d3b986c95e08e92056a5bac85bc/Employees`;
        Axios.get(dataURL).then((response) => {
            this.setState({
                employees : response.data
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
                        <div className="col">
                            <p className="h3 text-primary">Employees</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores, deleniti dolore earum eligendi ex explicabo fugiat fugit maxime modi porro praesentium quos reiciendis sed sunt suscipit totam, vero. Assumenda autem doloremque esse iusto laboriosam maiores mollitia ratione, vel. Modi?</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {                        //Data Avalable lo Vunte true,false
                                this.state.employees.length > 0 ?   
                                    <Fragment>
                                        <table className="table table-hover text-center table-striped table-light">
                                            <thead className="bg-dark text-white">
                                                <tr>
                                                    <th>Emp Id</th>
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>Age</th>
                                                    <th>Email</th>
                                                    <th>Address</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.employees.map((employee) => {
                                                        return (       // Console lo Key Error Vaste => key={employee.login.uuid}
                                                            <tr key={employee.login.uuid}>  

                                                                <td>{employee.login.uuid.substr(employee.login.uuid.length - 4)}</td>
                                                                <td>
                                                                    <img src={employee.picture.large} width="50" height="50"/>
                                                                </td>
                                                                <td>
                                                                    <Link to = {`/employees/${employee.login.uuid}`}   // employees Link ki Povadaaniki 
                                                                    className="text-primary font-weight-bold">{employee.name.first} {employee.name.last}</Link>
                                                                </td>
                                                                <td>{employee.dob.age} Yrs.</td>
                                                                <td>{employee.email}</td>
                                                                <td>{employee.location.city}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </Fragment> : null      // Data Lekapothe Null r No Data
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Employees;
