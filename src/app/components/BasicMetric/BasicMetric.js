import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { colors } from '../../common/constants'
// import Fetching from '../Fetching'
import styles from './BasicMetric.styles'

class BasicMetric extends Component {
  static propTypes = {
    metric: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    diff: PropTypes.string,
    isPercent: PropTypes.bool,
    fetching: PropTypes.bool
  }

  render () {
    const isUp = parseFloat(this.props.diff) > 0
    const trendingInfo = isUp
      ? {
        symbol: this.props.isPercent ? '' : '+',
        icon: 'trending_up',
        color: 'green'
      }
      : {
        // symbol is empty as number already has a minus
        symbol: '',
        icon: 'trending_down',
        color: 'red'
      }
    return (
      <div className={`${this.props.contentContainerStyling || ''} ${styles.contentContainer}`}>
        <div className={styles.sideSection}>
          <i className={`${styles.icon} material-icons`}>{this.props.icon}</i>
        </div>
        <div className={styles.mainSection}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>
              {this.props.title}
            </div>
          </div>
          <div className={`${this.props.metricContainerStyling || ''} ${styles.metricContainer}`}>
            <div className={styles.metric}>
              {this.props.fetching ? this.props.metric : this.props.metric}
            </div>
            {!this.props.fetching && this.props.diff &&
              <div className={`${this.props.performanceTagStyling || ''} ${styles.performanceTag}`}>
                <div
                  className={styles.percentage}
                  style={{ color: trendingInfo.color }}
                >
                  {`${trendingInfo.symbol}${this.props.diff}${this.props.isPercent ? '%' : ''}`}
                </div>
                <i
                  className={`${styles.trendingIcon} material-icons`}
                  style={{ color: trendingInfo.color }}
                >
                  {trendingInfo.icon}
                </i>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default BasicMetric
