// import 'bootstrap/dist/css/bootstrap.min.css' // not needed
import React from 'react'
import ReactDOM from 'react-dom'
import MapPage from './MapPage'
import parser from 'fast-xml-parser'

let clients = []

// There will need to be an async call to API here to get data

window.fetch('https://oca.debtworks.co.nz/debts/getxml.asp')
  .then(res => {
    return res.text()
  })
  .then(xml => {
    const data = parser.parse(xml)
    const clientData = data.root
    if (Array.isArray(clientData)) {
      clients = clientData
    } else {
      clients.push(clientData.element)
    }
    ReactDOM.render(
      <MapPage clients={clients} />,
      reactRoot
    )
  })
  .catch(err => {
    console.error(err)
  })

const reactRoot = document.getElementById('app')

ReactDOM.render(
  <MapPage clients={clients} />,
  reactRoot
)
