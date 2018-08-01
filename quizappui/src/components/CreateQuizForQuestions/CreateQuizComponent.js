import React, { Component } from 'react';
import JoinLogoAndUserInfoComponent from '../headerComponent/JoinLogoAndUserInfoComponent';
import JdInHeaderComponent from '../headerComponent/JdInHeaderComponent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createQuiz } from '../../actions/CreateQuizAction/CreateQuizAction';


class CreateQuizComponent extends Component {

    questionsList(questionsList) {

        return questionsList.map((question) =>
            <div>
                <p key={question.id}>Technology: {question.technology}</p>
                <p key={question.id}>Level: {question.level}</p>
                <p key={question.id}>Question Type: {question.type}</p>
                <p key={question.id}>Time: {question.time}</p>
                <p key={question.id}>Question: {question.question}</p>
                <p key={question.id}>Options: {this.options(question.options)}</p>
                -------------------------------------------------------------------------------------------------------------

            </div>
        );
    }
    options(options) {
        return options.map((option) =>
            <div>
                <span>{option.answer}</span>
                <span>{option.option}</span>

            </div>
        );
    }

    createQuiz(questions) {
        let queobj = [];
        for (let i = 0; i <= questions.length - 1; i++) {
            queobj.push({
                id: questions[i].id,
                question: questions[i].question,
                level: questions[i].level,
                orgId: questions[i].orgId,
                technology: questions[i].technology,
                time: questions[i].time,
                type: questions[i].type,
                options: this.createOptions(questions[i].options)
            });
        };

        let quizObje = {
            jobId: "AWS",
            orgId: "5aaa40c25b88705e732af801",
            questions: queobj
        }

        this.props.createQuiz(quizObje);
    }

    createOptions(options) {
        let options_array = [];
        for (let i = 0; i <= options.length - 1; i++) {
            options_array.push({
                answer: options[i].answer,
                option: options[i].option
            });
        }
        return options_array;
    }

    render() {
        return (
            <div className="app">
                <header className="App-header">
                    <JoinLogoAndUserInfoComponent />
                    <JdInHeaderComponent />
                </header>
                <div>
                    <br />
                    <br />

                    {this.questionsList(this.props.questions)}
                </div>
                <br />
                <br />
                {/* <form onSubmit={this.createQuiz}> */}
                <div className="row">
                    <div className="col-md text-center">
                        <span className="">
                            {/* <button type="submit" className="btn btn-primary">Create Quiz</button> */}
                            <button type="button" onClick={this.createQuiz.bind(this, this.props.questions)} className="btn btn-primary">Create Quiz</button>
                        </span>
                    </div>
                </div>
                {/* </form> .bind(this)*/}
                <br />
            </div>
        )
    }
}

function mapStateToProps({ questions }) {
    return { questions };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createQuiz }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuizComponent);