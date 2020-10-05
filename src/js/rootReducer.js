import { combineReducers } from 'redux';
import cityReducer from './components/CityEntries/cityReducer';
// import historyReducer from './components/SearchHistory/historyReducer';

const rootReducer = combineReducers({
    city: cityReducer,
    // history: historyReducer
});

export default rootReducer;
