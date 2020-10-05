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
                    <h1>(icon) Tokyo</h1>
                    <p>Lat/Long: 35.69, 139.69</p>
                    <hr/>
                  </div>
                </div>
                <div className='row text-center font-weight-bold'>
                  <div className='col-md-4'>
                    <p>Temperature (F)</p>
                    <p className='text-success'>65.62F</p><br/>
                  </div>
                  <div className='col-md-4'>
                    <p>Pressure</p>
                    <p className='text-success'>997</p><br/>
                  </div>
                  <div className='col-md-4'>
                    <p>Humidity</p>
                    <p className='text-success'>39%</p><br/>
                  </div>
                </div>
                <div className='row text-center font-weight-bold'>
                  <div className='col-md-4'>
                    <p>Lowest Temp (F)</p>
                    <p className='text-success'>65.62F</p><br/>
                  </div>
                  <div className='col-md-4'>
                    <p>Highest Temp (F)</p>
                    <p className='text-success'>997</p><br/>
                  </div>
                  <div className='col-md-4'>
                    <p>Wind Speed</p>
                    <p className='text-success'>39%</p><br/>
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