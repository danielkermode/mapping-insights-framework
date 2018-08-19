import React from 'react'
import ReactDOM from 'react-dom'
import MapPage from './MapPage'
import clients from './data'

const reactRoot = document.getElementById('app')

ReactDOM.render(
  <MapPage clients={clients} />,
  reactRoot
)
