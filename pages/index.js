import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

// Styles for highlighted code blocks.
import 'css/zenburn.css'

export default class Sass extends React.Component {
  constructor () {
    super()
    this.state = {
      password: 'TasteThePast',
      visible: false,
    }
  }

  handleInput (input) {
    const guess = input.target.value
    if (guess === this.state.password) {
      this.setState({ visible: true })
    } else {
      this.setState({ visible: false })
    }
  }

  _link () {
    if (this.state.visible === true) {
      return <Link to={prefixLink('/list/')}>Wine List</Link>
    } else {
      return null
    }
  }

  render () {
    return (
      <div>
        <h1>Welcome to Grand Crew</h1>
        <h3>Input the password one of us has given you to get a link to our presale wine selection</h3>
        <input onChange={this.handleInput.bind(this)} placeholder="password" />
        <br />
        {this._link()}
      </div>
    )
  }
}
