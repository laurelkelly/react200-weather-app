import React from 'react';
import { connect } from 'react-redux';

import {
    updateCityName, getWeather
} from './cityActions';

class CityEntries extends React.Component {
    constructor(props) {
        super(props);

        this.handleFirstSearch = this.handleFirstSearch.bind(this);
        this.handleHardCodedButtons = this.handleHardCodedButtons.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount (){
      // console.log(`Data: `, this.props.city.weatherData);
      this.handleFirstSearch();
    }

    handleFirstSearch() {
      const { dispatch } = this.props;
      dispatch(getWeather('Moscow'));
    }

    handleHardCodedButtons(e) {
      e.preventDefault();
      const { dispatch } = this.props;
      const searchValue = e.target.name;
      dispatch(getWeather(searchValue));
      // console.log(e.target.name);
    }

    handleInputChange(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateCityName(value)); // dispatch passes the value of the captured user input to the action (data goes from the Component ("C" from CARS) to an action)
        // console.log(this.props.city.weatherData);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const searchValue = this.props.city.cityName;
        dispatch(getWeather(searchValue));
        // console.log(this.props.city.weatherData);
        // console.log(this.props.city.receivedAt);
    }

    //CARS
    //Component captures the input and dispatches it to the Actions (with the dispatch function)
    //Actions export the data to the Reducer
    //Reducer sets State in the Store with the new values

    render() {
        // console.log(this.props.city);
        return (
            <form>
              <div className="btn-group">
                <button 
                  type="button" 
                  className="btn btn-primary"
                  name='San Diego'
                  onClick={ this.handleHardCodedButtons }
                >San Diego
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  name='New York'
                  onClick={ this.handleHardCodedButtons }
                >New York
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  name='Washington D.C.'
                  onClick={ this.handleHardCodedButtons }
                >Washington D.C.
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  name='London'
                  onClick={ this.handleHardCodedButtons }
                >London
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  name='Tokyo'
                  onClick={ this.handleHardCodedButtons }
                >Tokyo
                </button>
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
    };
}
  
export default connect(mapStoreToProps)(CityEntries);