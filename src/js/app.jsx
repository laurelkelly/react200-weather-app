import React from 'react';
import { connect } from 'react-redux';
import CityEntries from './components/CityEntries/CityEntries';
import CityInformation from './components/CityInformation/CityInformation';
import SearchHistory from './components/SearchHistory/SearchHistory';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-4'>Origin Weather Application</h1>
          <p className='lead'>Always know if you'll need an umbrella!</p>
          <p>Test Heroku deployment yet again</p>
        </div>
        <div className='row'>
          <div className='col-12'>
            <CityEntries />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <CityInformation />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    city: store.city
  };
}

export default connect(mapStoreToProps)(App);

