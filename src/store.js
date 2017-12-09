import { createStore} from 'redux';
import rootReducer from './reducers/index';

const INITIAL_STATE = {
    userDetails: false,
    initialValues: {
        name: "John Doe",
        email: "example@example.com",
        mobile: "4000000000"
    },
    user: [],
    form: {}
}

const store = createStore(rootReducer,INITIAL_STATE);
console.log(store.getState());

export default store;