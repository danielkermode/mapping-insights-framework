// import 'bootstrap/dist/css/bootstrap.min.css' // not needed
import React from 'react'
import ReactDOM from 'react-dom'
import MapPage from './MapPage'
import parser from 'fast-xml-parser'

// Dummy JSON data
// import dummyData from './dummy.json'
// const clients = dummyData.map(client => {
//   const isPaying = Math.random() > 0.5
//   const totalDebt = Math.floor(Math.random() * 950) + 50
//   const collected = 20
//   return {
//     ...client,
//     isPaying,
//     totalDebt,
//     collected
//   }
// })

// There will need to be an async call to API here to get data, this is XML example

let clients = []
window.fetch('https://oca.debtworks.co.nz/debts/getxml.asp')
  .then(res => {
    return res.text()
  })
  .then(xml => {
    const data = parser.parse(xml)
    const clientData = data.root
    if (Array.isArray(clientData.element)) {
      clients = clientData.element
    } else if (clientData && clientData.element) {
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
