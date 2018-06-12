import { combineReducers } from 'redux';
import game from './gameReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    game,
    ajaxCallsInProgress
});

export default rootReducer;