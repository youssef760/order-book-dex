import React, { Component, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import NavLink instead of Link
import { connect } from 'react-redux';
import { accountSelector } from '../store/selectors';
import defidev1 from '../images/defidev1.png';


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#/">IHC Token Exchange</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              className="nav-link small"
              href={`https://etherscan.io/address/${this.props.account}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.props.account}
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    account: accountSelector(state)
  }
}

export default connect(mapStateToProps)(Navbar)
