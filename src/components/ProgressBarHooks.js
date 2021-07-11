import React, {  useState, useEffect } from 'react'

const ProgressBarHooks = ({ width, height, low, high, value }) => {

  const [defaultInfo, setDefaultInfo] = useState({width: 200, height: 20, low: 0, high: 100, label: true, color: 'red'})

  const changeDraw = () => {
    const ctx = this.refs.canvas.getContext('2d')

    const h = this.refs.canvas.height
    const w = this.refs.canvas.width
    const rho = computeRho(value)
    const len = rho * w

    ctx.fillStyle = defaultInfo.color
    ctx.clearRect(0,0,w,h)
    ctx.fillRect(0,0,len,h)
  }
  const computeRho = (x) => {
    if(!x) x = 0

    const a = low
    const b = high

    const range = b - a

    let rho = (x - a) / range
    rho = Math.max(rho, 0)   // must be at least 0
    rho = Math.min(rho, 1)   // and no greater than 1

    return rho
  }


    const rho = computeRho(value)
    const percent = Math.round(rho * 100)
    useEffect(() => {
        changeDraw()
      })

  return (
    <div className="ProgressBar">
      <canvas ref="canvas" width={width} height={height} className="ProgressBar-bar"></canvas>
      {defaultInfo.label &&
      <p className="ProgressBar-percentage">
        {percent}%
      </p>
      }
    </div>
  )
}

export default ProgressBarHooks
