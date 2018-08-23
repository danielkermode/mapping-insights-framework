import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'

const MapPin = props => {
  const url = props.client.isPaying
    ? '/images/icon-green.png'
    : '/images/icon-inactive.png'
  return <Marker
    enableRetinaIcons
    key={props.client.id}
    position={{
      lat: props.client.location.coordinates[1],
      lng: props.client.location.coordinates[0]
    }}
    icon={{
      url
    }}
  />
}

const GoogleMapsWrapper = withScriptjs(withGoogleMap(props => {
  return <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: -36.8690629, lng: 174.7628474 }}
  >
    {props.clients.map(client => {
      return <MapPin
        client={client}
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
