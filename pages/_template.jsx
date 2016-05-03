import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import Griddle from 'griddle-react'

import { rhythm } from 'utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    const data = [
      {
        January: 35,
        February: 20,
        March: 27,
        April: 32,
        May: 23,
        June: 42,
      },
    ]

    return (
      <Griddle results={data} />
    )
  },
})
