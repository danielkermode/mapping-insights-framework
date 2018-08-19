import React, { Component } from 'react'
import InsightsMap from './components/InsightsMap'

class MapPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mode: 'insights'
    }
  }

  render () {
    return (
      <InsightsMap clients={this.props.clients} />
    )
  }
}

export default MapPage
