import { persistStore } from 'redux-persist'
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
};


export default function configureStore () {
    let store = createStore(rootReducer,INITIAL_STATE);
    let persistor = persistStore(store);
  
    return { persistor, store }
  };
