import React from 'react';
import { connect } from 'react-redux';

class CityInformation extends React.Component {
  constructor(props) {
    super(props);

  }
    render() {
        return (
            <div className='card border-info mb-3'>
              <div className='card-header text-white bg-info'>City Information</div>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-12 text-center'>
                    <h1><span><img src={`http://openweathermap.org/img/w/${this.props.city.weatherData.icon}.png`} /> </span>{this.props.city.weatherData.name}</h1>
                    <p>Lat/Long: {this.props.city.weatherData.latitude}, {this.props.city.weatherData.longitude}</p>
                    <hr/>
                  </div>
                </div>
                <div className='row text-center font-weight-bold'>
                  <div className='col-md-4'>
                    <p>Temperature (F)</p>
                    <p className='text-success'>{this.props.city.weatherData.temperature}F</p><br/>
                  </div>
                  <div className='col-md-4'>
                    <p>Pressure</p>
                    <p className='text-success'>{this.props.city.weatherData.pressure}</p><br/>
                  </div>
                  <div className='col-md-4'>
                    <p>Humidity</p>
                    <p className='text-success'>{this.props.city.weatherData.humidity}%</p><br/>
                  </div>
                </div>
                <div className='row text-center font-weight-bold'>
                  <div className='col-md-4'>
                    <p>Lowest Temp (F)</p>
                    <p className='text-success'>{this.props.city.weatherData.lowestTemp}F</p><br/>
                  </div>
                  <div className='col-md-4'>
                    <p>Highest Temp (F)</p>
                    <p className='text-success'>{this.props.city.weatherData.highestTemp}F</p><br/>
                  </div>
                  <div className='col-md-4'>
                    <p>Wind Speed</p>
                    <p className='text-success'>{this.props.city.weatherData.windSpeed}mph</p><br/>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

const mapStoreToProps = (store) => {
  return {
    city: store.city,
  };
}

export default connect(mapStoreToProps)(CityInformation);