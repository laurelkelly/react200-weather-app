const axios = require('axios');

// Action Creators

export const updateCityName = (cityName) => ({  //passing in event.target.value here
    type: 'UPDATE_CITY_NAME',
    payload: { cityName }
});

export const getWeather = (userInput) => ({
    type: 'GET_WEATHER',
    payload: axios.get(`/search/${userInput}`).then((res) => {
        // console.log(`Response: `, res.data);
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        const localDate = today.toLocaleDateString();
        const localTime = today.toLocaleTimeString();
        return {
            data: res.data,
            searchDate: localDate,
            searchTime: localTime
        };
    })
    .catch((err) => {
        console.log(`Error:`, err);
    })
});

//CARS
    //Component captures the input and dispatches it to the Actions (with the dispatch function)
    //Actions export the data to the Reducer
    //Reducer sets State in the Store with the new values
