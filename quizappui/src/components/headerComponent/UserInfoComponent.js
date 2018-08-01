import React, { Component } from 'react';
import './header.css';


class UserInfoComponent extends Component {
  render() {
    return (
      <div className="col-md-9 colHeightred">   
          <div className="row">
              <div className="col-md colHeightred d-flex justify-content-center userCompanyPosition">Synerzip</div>
              <div className="col-md colHeightgrey d-flex justify-content-end">
                        <span className="App-user">Zafar05</span>
                        <span className="App-logout">Logout</span>
              </div>
          </div>
      </div>
    );
  }
}

export default UserInfoComponent;
