import React, { Component } from 'react';
import {connect} from 'react-redux';

class LoginResponse extends Component {


    renderLogin(loginData) {
        const name = loginData.payload.data.access_token;
    
        return (
            <div >
              {name}
            </div>
        );
    }
    // componentWillReceiveProps(nextProps){
    //   if(nextProps.login){
        
    //   }
    // }

  render() {
    return (
      <div>
        Hi
        { this.props.login.map(this.renderLogin)}
      </div>
    )
  }
}

function mapStateToProps(state) {
    return { login : state.login };
}

export default connect(mapStateToProps)(LoginResponse);