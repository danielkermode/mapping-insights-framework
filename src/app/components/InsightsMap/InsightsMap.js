import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  InfoWindow,
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
      // JSON data
      // lat: props.client.location.coordinates[1],
      // lng: props.client.location.coordinates[0]
      // XML data
      lat: props.client.location.coordinates.element[1],
      lng: props.client.location.coordinates.element[0]
    }}
    icon={{url}}
    onMouseOver={props.handleMouseOver}
    onMouseOut={props.handleMouseExit}>
    {false &&
      (<InfoWindow>
        <div>
          <h5>Name: {props.client.name}</h5>
          <h5>Is Paying: {props.client.isPaying ? 'Yes' : 'No'}</h5>
          <h5>Total Debt: ${props.client.totalDebt}</h5>
          <h5>Debt Collected: ${props.client.collected}</h5>
        </div>
      </InfoWindow>)}
  </Marker>
}

const GoogleMapsWrapper = withScriptjs(withGoogleMap(props => {
  return <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: -36.8690629, lng: 174.7628474 }}
  >
    {props.clients.map(client => {
      return <MapPin
        client={client}
        showInfoWindow={props.showInfoWindow}
        handleMouseOver={props.handleMouseOver}
        handleMouseExit={props.handleMouseExit}
      />
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
