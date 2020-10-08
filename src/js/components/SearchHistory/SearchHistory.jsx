import React from 'react';
import { connect } from 'react-redux';

class SearchHistory extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let searchData = this.props.city.weatherHistory;  // empty array
    return (
      <div className='card border-info mb-3'>
        <div className='card-header text-white bg-info'>Search History</div>
        <div className='card-body'>
          <table className='table table-striped'>
            <tbody>
              { searchData.map((eachCity, index) => {
              return (
                <tr key={index}>
                  <td>{ eachCity.weatherData.name }</td>
                  <td> </td>
                  <td>{ eachCity.searchDate }<br/>{ eachCity.searchTime }</td>
                </tr>)}
              )}
            </tbody>
          </table>
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

export default connect(mapStoreToProps)(SearchHistory);