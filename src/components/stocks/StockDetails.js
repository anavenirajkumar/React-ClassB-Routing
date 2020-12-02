import React, { Fragment } from 'react';
import Axios from "axios";
import {Link} from "react-router-dom";

class StockDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedStock : {},
            errorMessage : ''
        }
    }

    componentDidMount() {
        // id from the url
        let stockId = this.props.match.params.id;

        let dataURL = `https://gist.githubusercontent.com/thenaveensaggam/2783236a4ca0f625ad2d5e3226357c69/raw/e46c8f9a91d5aa25ca659e222dac2fb9776b761d/stocks-20-08-2020.json`;
        Axios.get(dataURL).then((response) => {
            let stocks = response.data;
            let selectedStock = stocks.find((stock) => {
                return stock.id === stockId
            });
            console.log(selectedStock);
            this.setState({
                selectedStock : selectedStock
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
                        <p className="h3 text-primary">Stock Details</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus et fuga hic laborum non obcaecati sunt! Ab animi, aspernatur assumenda blanditiis cumque delectus deserunt dicta dignissimos dolores esse facilis fugit id iusto labore libero modi officia quos repudiandae tenetur voluptas!</p>
                    </div>
                    <div className="row">
                        <div className="col">
                            {
                                Object.keys(this.state.selectedStock).length !== 0 ?
                                    <Fragment>
                                        <div className="card">
                                            <div className="card-header bg-primary text-white">
                                                <p className="h4">{this.state.selectedStock.name}</p>
                                            </div>
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <ul className="list-group">
                                                            <li className="list-group-item list-group-item-primary">
                                                                NAME : {this.state.selectedStock.name}
                                                            </li>
                                                            <li className="list-group-item list-group-item-primary">
                                                                Market : {this.state.selectedStock.market}
                                                            </li>
                                                            <li className="list-group-item list-group-item-primary">
                                                                Industry : {this.state.selectedStock.industry}
                                                            </li>
                                                            <li className="list-group-item list-group-item-primary">
                                                                Symbol : {this.state.selectedStock.symbol}
                                                            </li>
                                                            <li className="list-group-item list-group-item-primary">
                                                                Sector : {this.state.selectedStock.sector}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <Link to="/stocks" className="btn btn-primary btn-sm">Back</Link>
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
export default StockDetails;
