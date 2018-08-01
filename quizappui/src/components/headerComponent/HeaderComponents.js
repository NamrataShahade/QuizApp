import React, { Component } from 'react';
import './header.css';
import quiz from './quiz.png';
import JoinLogoAndUserInfoComponent from './JoinLogoAndUserInfoComponent';
import JdInHeaderComponent from './JdInHeaderComponent';
import { fetchListOfTechnologies } from '../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class HeaderComponents extends Component {

  constructor(props) {
    super(props);
    this.tocken = sessionStorage.getItem('auth_token');
    this.createQuiz = this.createQuiz.bind(this);
  }
  createQuiz(event) {
    event.preventDefault();
    this.props.fetchListOfTechnologies(this.tocken);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <JoinLogoAndUserInfoComponent />
          <JdInHeaderComponent />
          <div className="container">
            <img src={quiz} className="quizImage" alt="quiz logo" />
            <div className="row">
              <div className="col-md text-center">
                <span className=""><b>Oops! its empty</b></span>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md text-center">
                <span className=""><b>BU 6 Lead JAVA</b><br /><br />
                  This Job Description doesnt have Quiz yet.<br />
                  Create Quiz by clicking button below.
                </span>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-md text-center">
                <span className=""></span>
              </div>
            </div> */}
            <br />
            <form onSubmit={this.createQuiz}>
              <div className="row">
                <div className="col-md text-center">
                  <span className="">
                    <button type="submit" className="btn btn-primary">Create New Quiz using question bank</button>
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-md text-center">
                  <span className="">or</span>
                </div>
              </div>
              <div className="row">
                <div className="col-md text-center">
                  <span className="">
                    <button type="submit" className="btn btn-default">Create New Quiz by creating your own questions</button>
                  </span>
                </div>
              </div>
            </form>
            {/* <div className="row">
              <div className="col-md text-center">
                Auth_Token: {this.tocken}
              </div>
            </div> */}
          </div>

        </header>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchListOfTechnologies }, dispatch);
}

export default connect(null, mapDispatchToProps)(HeaderComponents);
