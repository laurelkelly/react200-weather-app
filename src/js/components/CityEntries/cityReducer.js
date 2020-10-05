const defaultState = {
    cityName: '',
    weatherData: {}
};

export default function cityReducer (state = defaultState, action) {
    const { type, payload } = action;
    
    switch(type) {
        case 'UPDATE_CITY_DESCRIPTION': {
            return {
                ...state,
                cityName: payload.cityName
            };
        }
        case 'GET_WEATHER': {
            return {
                ...state,
                weatherData: payload.weatherData
            }
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