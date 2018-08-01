import { combineReducers } from 'redux';
import LoginReducer from './loginReducer/login_reducer';
import HeaderReducer from './headerReducer/FetchTechnologiesReducer';
import QuestionsReducer from './QuizSetUpReducer/Questions_Reducer';

const rootReducer = combineReducers({
  login: LoginReducer,
  header: HeaderReducer,
  questions: QuestionsReducer
});

export default rootReducer;


