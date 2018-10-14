import React, { Component } from 'react'
import InsightsMap from './components/InsightsMap'
import InsightsPanel from './components/InsightsPanel'
import styles from './MapPage.styles'
import moment from 'moment'

class MapPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mode: 'insights',
      startDate: moment().startOf('day').subtract(90, 'day').valueOf(),
      endDate: moment().endOf('day').valueOf()
    }
  }

  updateStartDate = startDate => {
    startDate = startDate.startOf('day').valueOf()
    this.setState({ startDate })
  }

  updateEndDate = endDate => {
    endDate = endDate.startOf('day').valueOf()
    this.setState({ endDate })
  }

  render () {
    const filteredClients = this.props.clients.filter(client => {
      const clientDate = moment(client.createdAt)
      console.log(clientDate)
      return clientDate.isBetween(this.state.startDate, this.state.endDate, 'days', '[]')
    })

    const numberOfPayingClients = filteredClients.filter(client => {
      return client.isPaying
    }).length

    const totalDebt = filteredClients.reduce((a, b) => {
      return a + b.totalDebt
    }, 0)

    const totalCollected = filteredClients.reduce((a, b) => {
      return a + b.collected
    }, 0)

    return (
      <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <InsightsPanel
            numberOfClients={filteredClients.length}
            numberOfPayingClients={numberOfPayingClients}
            totalDebt={totalDebt}
            totalCollected={totalCollected}
            updateStartDate={this.updateStartDate}
            updateEndDate={this.updateEndDate}
          />
          <InsightsMap clients={filteredClients} />
        </div>
      </div>
    )
  }
}

export default MapPage
