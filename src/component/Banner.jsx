import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className='p-4 p-lg-5 bg-light rounded-3 text-center'>
        <div className="m-4 m-lg-5"></div>
        <h1 className='display-4 font-weight-bold'>A Warm Welcome!</h1>
        <p className='h4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus in quibusdam, id magnam ullam non magni repudiandae iusto amet sint?</p>
        <button className='btn btn-primary btn-lg'>Call to action</button>
      </div>
    )
  }
}
