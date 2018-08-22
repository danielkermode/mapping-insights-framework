import React, { Component } from 'react'
import InsightsMap from './components/InsightsMap'
import InsightsPanel from './components/InsightsPanel'

class MapPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mode: 'insights'
    }
  }

  render () {
    const numberOfPayingClients = this.props.clients.filter(client => {
      return client.isPaying
    }).length

    const totalDebt = this.props.clients.reduce((a, b) => {
      return a + b.totalDebt
    }, 0)

    const totalCollected = this.props.clients.reduce((a, b) => {
      return a + b.collected
    }, 0)
    return (
      <div style={{ margin: 50 }}>
        <InsightsPanel
          numberOfClients={this.props.clients.length}
          numberOfPayingClients={numberOfPayingClients}
          totalDebt={totalDebt}
          totalCollected={totalCollected}
        />
        <InsightsMap clients={this.props.clients} />
      </div>
    )
  }
}

export default MapPage
