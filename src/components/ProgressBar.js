import React, { Component } from 'react'
import PropTypes from 'prop-types'

/*
 * Stateless Progress bar rendered on a canvas
 *
 * Properties:
 *  width     horizontal size of bar
 *  height    vertical size of bar
 *  low       low end of data range (default: 0)
 *  high      high end of data range (default: 100)
 *  value     value to display
 *  label     show percentage label (default: true)
 *  color     color of the bar (default: red)
 */
class ProgressBar extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    low: PropTypes.number,
    high: PropTypes.number,
    color: PropTypes.string,
    label: PropTypes.bool,
    value: PropTypes.number.isRequired
  }

  static defaultProps = {
    width: 200,
    height: 20,
    low: 0,
    high: 100,
    label: true,
    color: 'red'
  }

  /*
   * Render the progress bar HTML
   */
  render() {
    const rho = this._computeRho(this.props.value)
    const percent = Math.round(rho * 100)

    return (
      <div className="ProgressBar">
        <canvas ref="canvas" width={this.props.width} height={this.props.height} className="ProgressBar-bar"></canvas>
        {this.props.label &&
        <p className="ProgressBar-percentage">
          {percent}%
        </p>
        }
      </div>
    )
  }

  /*
   * Draw on a mount
   */
  componentDidMount(prevProps, prevState) {
    this._draw()
  }

  /*
   * Draw on an update
   */
  componentDidUpdate(prevProps, prevState) {
    this._draw()
  }

  /*
   * Draw the progress bar on the canvas, after the DOM
   * elements have been created.
   */
  _draw() {
    const ctx = this.refs.canvas.getContext('2d')

    const h = this.refs.canvas.height
    const w = this.refs.canvas.width
    const rho = this._computeRho(this.props.value)
    const len = rho * w

    ctx.fillStyle = this.props.color
    ctx.clearRect(0,0,w,h)
    ctx.fillRect(0,0,len,h)
  }

  /*
   * Compute the proportion given a value.
   * If the range isn't configured in the properties
   * we assume [0..100]. If the value isn't provided
   * we assume 0.
   */
  _computeRho(x) {
    if(!x) x = 0

    const a = this.props.low
    const b = this.props.high

    const range = b - a

    let rho = (x - a) / range
    rho = Math.max(rho, 0)   // must be at least 0
    rho = Math.min(rho, 1)   // and no greater than 1

    return rho
  }
}

export default ProgressBar
