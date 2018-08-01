import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import history from './history';
import './index.css';
import LoginComponent from './components/loginComponent/LoginComponent';
import registerServiceWorker from './registerServiceWorker';
import HeaderComponents from '../src/components/headerComponent/HeaderComponents';
import SetupQuizComponent from '../src/components/quizSetupComponent/SetupQuizComponent';
import CreateQuizComponent from '../src/components/CreateQuizForQuestions/CreateQuizComponent';
import SuccessComponent from '../src/components/SuccessComponent/SuccessComponent';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={history} >
            <div>
                <Switch>
                    <Route path="/HeaderComponents" component={HeaderComponents} />
                    <Route path="/SetupQuizComponent" component={SetupQuizComponent} />
                    <Route path="/CreateQuizComponent" component={CreateQuizComponent} />
                    <Route exact path="/SuccessComponent" component={SuccessComponent} />
                    <Route exact path="/" component={LoginComponent} />
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
