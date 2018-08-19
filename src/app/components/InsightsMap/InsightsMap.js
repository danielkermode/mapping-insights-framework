import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'

const GoogleMapsWrapper = withScriptjs(withGoogleMap(props => {
  return <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: -36.8690629, lng: 174.7628474 }}
  >
    {props.clients.map(client => {
      const opacity = client.isPaying ? 1 : 0.5
      return <Marker
        opacity={opacity}
        position={{
          lat: client.location.coordinates[1],
          lng: client.location.coordinates[0]
        }}
      />
    })}
  </GoogleMap>
}))

class MappingInsightsMap extends Component {
  render () {
    return (
      <GoogleMapsWrapper
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
