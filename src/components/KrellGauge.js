import React, { Component, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ProgressBar from './ProgressBar'

const low = 1
const high = 10
const step = 1

const KrellGauge = () => {

  const [gauge, setGauge] = useState({value: low, direction: 1})

  const dir = (gauge.direction === -1) ? 'decreasing' : 'increasing'

  return (
    <div className="App">
      <p className="App-intro">
        Demonstration of Progress Bar from <code>components/KrellGauge.js</code>
      </p>
      <ProgressBar width={200} height={20} low={low} high={high} value={gauge.value} />
      <p>Showing {gauge.value} in range [{low}..{high}] {dir}</p>
    </div>
  )
  
}

export default KrellGauge