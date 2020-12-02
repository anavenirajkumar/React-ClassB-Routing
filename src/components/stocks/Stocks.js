import React, { Fragment } from 'react';
import Axios from "axios";
import {Link} from "react-router-dom";

class Stocks extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            stocks: [],
            errorMessage: ''
        }
    }

    componentDidMount() {
        let dataURL = `https://gist.githubusercontent.com/thenaveensaggam/2783236a4ca0f625ad2d5e3226357c69/raw/e46c8f9a91d5aa25ca659e222dac2fb9776b761d/stocks-20-08-2020.json`;
        Axios.get(dataURL).then((response) => {
            this.setState({
                stocks : response.data
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
                            <p className="h3 text-primary">Stocks</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis cumque distinctio dolorum eius et expedita illo laudantium maxime numquam obcaecati officia quas qui quo repellendus, sequi sunt suscipit tempore temporibus velit veritatis vero vitae. Ab assumenda distinctio sed velit!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {
                                this.state.stocks.length > 0 ?
                                    <Fragment>
                                        <table className="table table-hover text-center table-striped table-light">
                                            <thead className="bg-dark text-white">
                                            <tr>
                                                <th>Stock Id</th>
                                                <th>Name</th>
                                                <th>Market</th>
                                                <th>Industry</th>
                                                <th>Symbol</th>
                                                <th>Sector</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                this.state.stocks.map((stock) => {
                                                    return (
                                                        <tr key={stock.id}>
                                                            <td>{stock.id.substr(stock.id.length - 4)}</td>
                                                            <td>
                                                                <Link to={`/stocks/${stock.id}`} className="text-primary font-weight-bold">{stock.name}</Link>
                                                            </td>
                                                            <td>{stock.market}</td>
                                                            <td>{stock.industry}</td>
                                                            <td>{stock.symbol}</td>
                                                            <td>{stock.sector}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            </tbody>
                                        </table>
                                    </Fragment> : null
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Stocks;
