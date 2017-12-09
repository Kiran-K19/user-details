import { combineReducers} from 'redux';
import {reducer as formReducer } from 'redux-form';

const initialValues = (state={},action)=>{
    switch(action.type){
        case 'UPDATE_INITIAL':       
           return Object.assign({},state,action.values)
        default:
        return state;
    }
}

const user = (state=[],action)=>{
    switch(action.type){
        case 'SUBMIT_FORM':       
           let newUser = state.concat([action.values]);
           return newUser
        default:
        return state;
    }

}

const rootReducer = combineReducers({
    initialValues,
    user,
    form: formReducer,
       
    });
export default rootReducer;    