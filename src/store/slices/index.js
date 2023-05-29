import {combineReducers} from 'redux';
import Auth from './userSlice';

const rootReducer = combineReducers({
  Auth,
});

export default rootReducer;
