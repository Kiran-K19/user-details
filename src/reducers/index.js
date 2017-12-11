import {reducer as formReducer } from 'redux-form';
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'

const config = {
    key: 'root',
    storage,
  };

const userDetails = (state=false,action)=>{
    switch(action.type){
        case 'SHOW_DETAILS':       
           return true
        case 'HIDE_DETAILS':
            return false
        default:
        return state;
    }
}

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

const rootReducer = persistCombineReducers(config,{
    userDetails,
    initialValues,
    user,
    form: formReducer,
       
    });
export default rootReducer;    