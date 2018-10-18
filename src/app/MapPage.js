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
      endDate: moment().endOf('day').valueOf(),
      filteredDebtRange: { min: 0, max: 1000 }
    }
  }

  updateFilteredDebtRange = filteredDebtRange => {
    this.setState({ filteredDebtRange })
  }

  updateStartDate = startDate => {
    startDate = startDate.startOf('day').valueOf()
    this.setState({ startDate })
  }

  updateEndDate = endDate => {
    endDate = endDate.startOf('day').valueOf()
    this.setState({ endDate })
  }

  isDebtWithinRange = client => {
    const debtOwed = client.totalDebt - client.collected
    const max = this.state.filteredDebtRange.max
    const min = this.state.filteredDebtRange.min

    return debtOwed >= min && debtOwed <= max
  }

  isDateWithinRange = client => {
    const clientDate = moment(client.createdAt)
    return clientDate.isBetween(this.state.startDate, this.state.endDate, 'days', '[]')
  }

  render () {
    const filteredClients = this.props.clients
      .filter(this.isDateWithinRange)
      .filter(this.isDebtWithinRange)

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
            updateFilteredDebtRange={this.updateFilteredDebtRange}
            filteredDebtRange={this.state.filteredDebtRange}
          />
          <InsightsMap clients={filteredClients} />
        </div>
      </div>
    )
  }
}

export default MapPage
