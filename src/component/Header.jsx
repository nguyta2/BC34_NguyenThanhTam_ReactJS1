import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <a className="ml-5 text-white navbar-brand" href="#">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="justify-content-end collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="px-2 nav-item active">
                <a className="text-white nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="px-2 nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="px-2 nav-item">
                <a className="nav-link" href="#">Service</a>
              </li>
              <li className="px-2 nav-item">
                <a className="nav-link disabled">Contact</a>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    )
  }
}
