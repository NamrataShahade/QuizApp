import React, { Component } from 'react';
import './quizSetup.css';
import JoinLogoAndUserInfoComponent from '../headerComponent/JoinLogoAndUserInfoComponent';
import JdInHeaderComponent from '../headerComponent/JdInHeaderComponent';
import { fetchQuestions } from '../../actions/fetchQuestionsAction/fetchNoOfQuestionsAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SetupQuizComponent extends Component {
  constructor(props) {
    super(props);
    this.token = sessionStorage.getItem('auth_token');
    this.state = {
      lowLevelTech: '',
      lowLevelType: '',
      lowLevelno: '',
      lowLevel: 'EASY',
      midLevelTech: '',
      midLevelType: '',
      midLevelno: '',
      midLevel: 'MEDIUM',
      highLevelTech: '',
      highLevelType: '',
      highLevelno: '',
      highLevel: 'TOUGH'
    }
  }


  listItems(technology) {
    return technology.map((item) =>
      <option key={item.id} value={item.name} >{item.name}</option>
    );
  }

  onChaneData = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  };


  setLowValues() {

    let listOfQuestions = [];
    let lowLevelQuestions = {
      count: this.state.lowLevelno,
      level: this.state.lowLevel,
      technology: this.state.lowLevelTech,
      type: this.state.lowLevelType
    };
    let midLevelQuestions = {
      count: this.state.midLevelno,
      level: this.state.midLevel,
      technology: this.state.midLevelTech,
      type: this.state.midLevelType
    };
    let highLevelQuestions = {
      count: this.state.highLevelno,
      level: this.state.highLevel,
      technology: this.state.highLevelTech,
      type: this.state.highLevelType
    };
    listOfQuestions.push(lowLevelQuestions);
    listOfQuestions.push(midLevelQuestions);
    listOfQuestions.push(highLevelQuestions);
    console.log(listOfQuestions);
    this.props.fetchQuestions(listOfQuestions);
  }
  render() {
    if (this.props.header.length === 0) {
      return "Please click on a button ";
    }
    return (
      <div className="App">

        <header className="App-header">
          <JoinLogoAndUserInfoComponent />
          <JdInHeaderComponent />
        </header>
        <br />
        <br />
        <div className="row">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;Fill below fields to Create Quiz.!</span>
        </div>
        <br />
        <div className="hrPositions">
          <hr />
        </div>
        {/* <div className="container"> */}
        <div className="row">
          <span className="">&nbsp;&nbsp;&nbsp;&nbsp;Low Level Questions-Max 6</span>
        </div>
        <br />
        <div className="row rowBackGroundColor">
          <div className="col-md-4 col-sm-3">
            <span> select technology:</span>&nbsp;
               <span>
              <select value={this.state.lowLevelTech} onChange={this.onChaneData} id="lowLevelTech" className="selectpicker btn btn-labeled btn-start jdDropDownHeight">
                <option value="">Select technology</option>
                {this.listItems(this.props.header)}
              </select>
            </span>
          </div>
          <div className="col-md-3 col-sm-2">
            <span className="colSelectQuestionType">select question type:</span>&nbsp;
            <span>
              <select value={this.state.lowLevelType} onChange={this.onChaneData} id="lowLevelType" className="selectpicker btn btn-labeled btn-start jdDropDownHeight">
                <option value="">Select type</option>
                <option value="CODE">code</option>
                <option value="NON_CODE">non-code</option>
              </select>
            </span>
          </div>
          <div className="col-md-3 col-sm-2">
            <span className="colSelectNumQues">Select number of question:</span>&nbsp;
            <span>
              <select value={this.state.lowLevelno} onChange={this.onChaneData} id="lowLevelno" className="selectpicker btn btn-labeled btn-start jdDropDownHeight">
                {/* <option value="">Select number of question</option> */}
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
              </select>
            </span>
          </div>
          <div className="col-md-2 col-sm-2 addRemBtnPosition">
            <span><button className="btn btn-danger">-</button></span>&nbsp;
            <span><button className="btn btn-info"  >+</button></span>
          </div>
        </div>
        <br />



        <div className="row">
          <span className="">&nbsp;&nbsp;&nbsp;&nbsp;Medium Level Questions-Max 6</span>
        </div>
        <br />
        <div className="row rowBackGroundColor">
          <div className="col-md-4 col-sm-3">
            <span> select technology:</span>&nbsp;
               <span>
              <select value={this.state.midLevelTech} onChange={this.onChaneData} id="midLevelTech" className="selectpicker btn btn-labeled btn-start jdDropDownHeight">
                <option value="">Select technology</option>
                {this.listItems(this.props.header)}
              </select>
            </span>
          </div>
          <div className="col-md-3 col-sm-2">
            <span className="colSelectQuestionType">select question type:</span>&nbsp;
            <span>
              <select value={this.state.midLevelType} onChange={this.onChaneData} id="midLevelType" className="selectpicker btn btn-labeled btn-start jdDropDownHeight">
                <option value="">Select type</option>
                <option value="CODE">code</option>
                <option value="NON_CODE">non-code</option>
              </select>
            </span>
          </div>
          <div className="col-md-3 col-sm-2">
            <span className="colSelectNumQues">Select number of question:</span>&nbsp;
            <span>
              <select value={this.state.midLevelno} onChange={this.onChaneData} id="midLevelno" className="selectpicker btn btn-labeled btn-start jdDropDownHeight">
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
              </select>
            </span>
          </div>
          <div className="col-md-2 col-sm-2 addRemBtnPosition">
            <span><button className="btn btn-danger">-</button></span>&nbsp;
            <span><button className="btn btn-info">+</button></span>
          </div>
        </div>



        <br />
        <div className="row">
          <span className="">&nbsp;&nbsp;&nbsp;&nbsp;High Level Questions-Max 7</span>
        </div>
        <br />
        <div className="row rowBackGroundColor">
          <div className="col-md-4 col-sm-3">
            <span> select technology:</span>&nbsp;
               <span>
              <select value={this.state.highLevelTech} onChange={this.onChaneData} id="highLevelTech" className="selectpicker btn btn-labeled btn-start jdDropDownHeight">
                <option value="">Select technology</option>
                {this.listItems(this.props.header)}
              </select>
            </span>
          </div>
          <div className="col-md-3 col-sm-2">
            <span className="colSelectQuestionType">select question type:</span>&nbsp;
            <span>
              <select value={this.state.highLevelType} onChange={this.onChaneData} id="highLevelType" className="selectpicker btn btn-labeled btn-start jdDropDownHeight">
                <option value="">Select type</option>
                <option value="CODE">code</option>
                <option value="NON_CODE">non-code</option>
              </select>
            </span>
          </div>
          <div className="col-md-3 col-sm-2">
            <span className="colSelectNumQues">Select number of question:</span>&nbsp;
            <span>
              <select value={this.state.highLevelno} onChange={this.onChaneData} id="highLevelno" className="selectpicker btn btn-labeled btn-start jdDropDownHeight">
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
              </select>
            </span>
          </div>
          <div className="col-md-2 col-sm-2 addRemBtnPosition">
            <span><button className="btn btn-danger">-</button></span>&nbsp;
            <span><button className="btn btn-info">+</button></span>
          </div>
        </div>
        <br />
        <div className="row justify-content-center">
          <span><button type="button" onClick={this.setLowValues.bind(this)} className="btn btn-primary btn-md doneBtnWidth">Done</button></span>
        </div>
        {/* </div> */}
      </div >
    )
  }
}

function mapStateToProps({ header }) {
  return { header };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchQuestions }, dispatch);
}

//export default connect(mapStateToProps)(mapDispatchToProps)(SetupQuizComponent);

export default connect(mapStateToProps, mapDispatchToProps)(SetupQuizComponent);