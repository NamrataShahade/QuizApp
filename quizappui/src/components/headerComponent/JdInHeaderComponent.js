import React, { Component } from 'react'
import './header.css';
export default class JdInHeaderComponent extends Component {
    render() {
        return (
            <div className="row headerTwoRowHeight justify-content-md-center">
                {/* <hr size = "10"/> */}
                <div className="col-md col-sm colHeightgrey d-flex"></div>
                <div className="col-md col-sm colHeightred d-flex"></div>
                <div className="col-md col-sm colHeightgrey d-flex justify-content-end align-self-end jdLabelPosition">
                    <span className="App-client-name">Job Description</span>
                </div>
                <div className="col-md-auto col-sm-auto colHeightred d-flex align-self-center jdDropDownColposition">
                    <span>
                        <select id="selectJob" className="selectpicker btn btn-labeled btn-start selectId">
                            <option value="">Select Your Option</option>
                            <option value="">Java</option>
                            <option value="">Angular</option>
                            <option value="">AWS</option>
                        </select>
                    </span>
                </div>
                <div className="col-md-auto col-sm-auto"></div>
            </div>
        )
    }
}
