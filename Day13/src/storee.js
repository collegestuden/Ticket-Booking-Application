import { createStore } from 'redux';
import rootReducer from './reducers'; // assuming you have a root reducer file

const storee = createStore(rootReducer);

export default storee;
