import { createStore , combineReducers } from 'redux';

import counterReducer from './reducers/counter ';
import ProfileReducer from '../actions/reducers/Profile';

// "root State "
/* {
    counter: {
        value:0

    },
    Profile: {
        name:''
    }
}

*/

const store = createStore( counterReducer(combineReducers({
    counter: counterReducer,
    Profile: ProfileReducer

})) /* initialState */) ; 

export default store;