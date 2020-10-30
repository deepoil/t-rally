import { combineReducers } from 'redux';
import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';
import globalPlanBasicReducer from './globalPlanBasicReducer';

const rootReducer = (history: History) => combineReducers({
    globalPlanBasic: globalPlanBasicReducer,
    router: connectRouter(history)
})

export interface State {
    globalPlanBasic: object
    router: RouterState
}

export default rootReducer