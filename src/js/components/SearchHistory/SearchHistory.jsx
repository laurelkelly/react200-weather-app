import React from 'react';
import { connect } from 'react-redux';

class SearchHistory extends React.Component {
    render() {
        return (
            <div className='card border-info mb-3'>
              <div className='card-header text-white bg-info'>Search History</div>
              <div className='card-body'>
                <table className='table table-striped'>
                  <tbody>
                    <tr>
                      <td>San Diego</td>
                      <td> </td>
                      <td>10/05/2020<br/>11:15:36</td>
                    </tr>
                    <tr>
                      <td>New York</td>
                      <td> </td>
                      <td>10/05/2020<br/>11:15:36</td>
                    </tr>
                    <tr>
                      <td>Washington D.C.</td>
                      <td> </td>
                      <td>10/05/2020<br/>11:15:36</td>
                    </tr>
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