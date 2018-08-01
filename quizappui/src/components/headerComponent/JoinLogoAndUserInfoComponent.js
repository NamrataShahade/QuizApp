import React, { Component } from 'react'
import LogoComponent from './LogoComponent'
import UserInfoComponent from './UserInfoComponent'
import './header.css';

export default class JoinLogoAndUserInfoComponent extends Component {
  render() {
    return (
      <div className="row headerOneRowHeight border-top-2 border-bottom-2">
        <LogoComponent />
        <UserInfoComponent />
      </div>
    )
  }
}
