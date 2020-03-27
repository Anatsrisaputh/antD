import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Resume extends Component {
  render() {
    return (
      <div>
          <h1> This is Resume page</h1>
          <Link to="/">My Home page</Link>
      </div>
    )
  }
}
