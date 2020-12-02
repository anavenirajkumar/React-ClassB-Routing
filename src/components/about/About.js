import React from "react";

class About extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h3">About App</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti doloribus esse, itaque laboriosam nesciunt reprehenderit unde. A amet, asperiores, cum enim eos facere ipsa libero magnam mollitia quam quidem quod temporibus voluptatibus! Amet eius nostrum praesentium repellat, sequi vitae voluptates?</p>
                            <p className="h4">Version : 1.0.1</p>
                            <p className="h4">Author : ANAVENI RAJKUMAR</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default About;
