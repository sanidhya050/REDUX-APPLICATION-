import { UPDATE_NAME } from "..actions/constants";


const initialState = {
    name : ''
};

const ProfileReducer = ( state = initialState , 
    action ) => {
        switch(action.type ) {
            case UPDATE_NAME:
                return {
                    ...state,
                    name: action.payload

                };
                deafult: 
                return state ;
        }
    };
    export default ProfileReducer;