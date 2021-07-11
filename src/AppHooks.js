import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

import ProgressBar from './components/ProgressBar'
import KrellGauge from './components/KrellGauge'

const low = 40
const high = 400
const step = 4

const AppHooks = props => {

  const [bar, setBar] = useState({value: low, direction: 1})
  const [tickBar, setTickBar] = useState({value: low, direction: 1})

  const changeTick = () => {
    let v = tickBar.value
    let d = tickBar.direction

    v += step * d

    if(v <= low) {
      v = low
      d = 1
    }

    if(v >= high) {
      v = high
      d = -1
    }

    setTickBar({
      value: v,
      direction: d
    })
  }

  useEffect(() => {
      const tick = setInterval(() => {
        changeTick()
      }, 1000)
      return () => clearInterval(tick)
    })

  const dir = (bar.direction === -1) ? 'decreasing' : 'increasing'

  return(
    <div className="App">
      <header className ="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Progress Bar App</h1>
      </header>
      <p className="App-intro">
        Demonstration of Progress Bar from <code>components/ProgressBar.js</code>
      </p>
      <ProgressBar width={200} height={20} low={low} high={high} value={bar.value} />
      <p>Showing {bar.value} in range [{low}..{high}] {dir}</p>
      <div>
        <KrellGauge />
      </div>
    </div>
  )
}

export default AppHooks
