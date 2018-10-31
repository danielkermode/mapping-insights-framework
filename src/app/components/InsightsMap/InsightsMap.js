import React, { Component } from 'react'
import MapPin from './MapPin'
// import PropTypes from 'prop-types'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap
} from 'react-google-maps'

const GoogleMapsWrapper = withScriptjs(withGoogleMap(props => {
  return <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: -36.8690629, lng: 174.7628474 }}
  >
    {props.clients.map(client => {
      return <MapPin client={client} />
    })}
  </GoogleMap>
}))

class MappingInsightsMap extends Component {
  render () {
    return (
      <GoogleMapsWrapper
        showInfoWindow={this.props.showInfoWindow}
        handleMouseOver={this.props.handleMouseOver}
        handleMouseExit={this.props.handleMouseExit}
        isMarkerShown
        googleMapURL='asd'
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '600px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        clients={this.props.clients}
      />
    )
  }
}

export default MappingInsightsMap
