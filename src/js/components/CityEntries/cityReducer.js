const defaultState = {
    cityName: '',
    weatherData: {},
    weatherHistory: [],
    searchDate: '',
    searchTime: ''
};

export default function cityReducer (state = defaultState, action) {
    const { type, payload } = action;
    // console.log(type);
    // console.log(type);

    switch(type) {
        case 'UPDATE_CITY_NAME': {
            // console.log('anything', payload.cityName);
            return {
                ...state,
                cityName: payload.cityName
            };
        }
        case 'GET_WEATHER_FULFILLED': {
            // console.log('throw me a bone', payload.data);
            // console.log('something', payload.receivedAt);
            const newWeatherObject = {
                weatherData: payload.data,
                searchDate: payload.searchDate,
                searchTime: payload.searchTime
            }
            let tempHistory = state.weatherHistory;
            tempHistory.push(newWeatherObject);
            // console.log(state.weatherHistory);
            return {
                ...state,
                weatherData: payload.data,
                searchDate: payload.searchDate,
                searchTime: payload.searchTime,
                weatherHistory: tempHistory
            };
        } 
        default: {
            return state;
        }
    }
}

//CARS
//Component captures the input and dispatches it to the Actions (with the dispatch function)
//Actions export the data to the Reducer
//Reducer sets State in the Store with the new values