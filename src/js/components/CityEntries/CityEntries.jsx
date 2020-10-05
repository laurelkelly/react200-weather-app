import React from 'react';
import { connect } from 'react-redux';

import {
    updateCityDescription, getWeather
} from './cityActions';

class CityEntries extends React.Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateCityDescription(value)); // dispatch passes the value of the captured user input to the action (data goes from the Component ("C" from CARS) to an action)
        console.log(this.props.city.weatherData);
    }

    handleSubmit() {
        const { dispatch } = this.props;
        const searchValue = this.props.city.cityName;
        dispatch(getWeather(searchValue));
    }

    render() {
        // console.log(this.props.city);
        return (
            <form>
              <div className="btn-group">
                <button type="button" className="btn btn-primary">San Diego</button>
                <button type="button" className="btn btn-primary">New York</button>
                <button type="button" className="btn btn-primary">Washington D.C.</button>
                <button type="button" className="btn btn-primary">London</button>
                <button type="button" className="btn btn-primary">Tokyo</button>
              </div>
              <div className='input-group mb-3'>
                <input  
                  type='text'
                  className='form-control'
                  id='city-name'
                  placeholder='Enter city'
                  value={ this.props.city.cityName }
                  onChange={ this.handleInputChange }
                />
                <div className='input-group-append'>
                    <button 
                        type='submit' 
                        className='btn btn-outline-secondary'
                        onClick={ this.handleSubmit }
                    >Go!
                    </button>
                </div>
              </div>
            </form>
        );
    }
}

const mapStoreToProps = (store) => {
    return {
      city: store.city,
    //   history: store.history
    };
}
  
export default connect(mapStoreToProps)(CityEntries);