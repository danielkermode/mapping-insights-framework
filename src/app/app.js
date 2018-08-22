import React from 'react'
import ReactDOM from 'react-dom'
import MapPage from './MapPage'
import clients from './data'

const reactRoot = document.getElementById('app')

// There will need to be an async call to API here to get data, eg.
// /api/debtors

ReactDOM.render(
  <MapPage clients={clients} />,
  reactRoot
)
