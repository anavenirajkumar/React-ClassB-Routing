import React from "react";

class Home extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="landing-page">
                    <div className="wrapper">
                        <div className="d-flex flex-column justify-content-center text-center align-items-center h-100">
                            <h2 className="display-3">Welcome to React Routing</h2>
                            <p className="lead p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequuntur culpa dolore dolorem ea eum facere maxime molestias placeat quasi ratione, vel? Alias dolor error, eum fugit ipsum iste laboriosam maxime perferendis placeat quae quis quod recusandae reiciendis temporibus, veniam.</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Home;
