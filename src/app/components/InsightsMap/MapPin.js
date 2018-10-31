import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {
  InfoWindow,
  Marker
} from 'react-google-maps'

class MapPin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showInfoWindow: false
    }
  }

  handleMouseOver = (clientId) => {
    this.setState({
      showInfoWindow: clientId
    })
  }
  handleMouseExit = e => {
    this.setState({
      showInfoWindow: false
    })
  }

  render () {
    const { client } = this.props
    const url = client.isPaying
      ? '/images/icon-green.png'
      : '/images/icon-inactive.png'
    const zIndex = client.isPaying ? 100 : 0
    return (
      <Marker
        enableRetinaIcons
        key={client.id}
        position={{
          // JSON data
          // lat: client.location.coordinates[1],
          // lng: client.location.coordinates[0]
          // XML data
          lat: client.location.coordinates.element[1],
          lng: client.location.coordinates.element[0]
        }}
        icon={{url}}
        defaultZIndex={zIndex}
        onMouseOver={() => { this.handleMouseOver(client.id) }}
        onMouseOut={this.handleMouseExit}>
        {this.state.showInfoWindow === client.id &&
          (<InfoWindow>
            <div>
              <h5>Name: {client.name}</h5>
              <h5>Is Paying: {client.isPaying ? 'Yes' : 'No'}</h5>
              <h5>Total Debt: ${client.totalDebt.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</h5>
              <h5>Debt Collected: ${client.collected.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</h5>
            </div>
          </InfoWindow>)}
      </Marker>
    )
  }
}

export default MapPin
