
 import {
    DECREMENT,
    INCREMENT,
    UPDATE_NAME
 } from  './comstants ';

// action creators
const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

const increment = () => {
    return {
        type: 'INCREMENT'
    };
};

const update_name = (name) => {
    return {
        type:  UPDATE_NAME,
        payload: name // the extra info is stored in the payload by any name.. 
    };
};
// initial state 
const lsState = localStorage.getItem('state') ;
const initialState = lsState !== null ? JSON.parse(lsState ) : {
    value: 0
};

export {
    decrement,
    increment,
    update_name
};