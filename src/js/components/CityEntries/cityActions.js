const axios = require('axios');

// Action Creators

// export function updateCityDescription(description) {
//     return {
//         type: 'UPDATE_CITY_DESCRIPTION',
//         payload: { description }
//     };
// }

export const updateCityDescription = (cityName) => ({  //passing in event.target.value here
    type: 'UPDATE_CITY_DESCRIPTION',
    payload: { cityName }
});

export const getWeather = (userInput) => {
    // console.log(userInput);
    return {
        type: 'GET_WEATHER',
        payload: fetch(`/search/${userInput}`)
            .then(response => {
                console.log(response);
                return {
                    weatherData: response.data,
                    receivedAt: Date.now()
                }
            })
        .catch((error) => {
            console.log(error)
            return {
                weatherData: error,
            }
        })
    }
};

