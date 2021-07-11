import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppHooks from './AppHooks'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<AppHooks />, document.getElementById('root'))
registerServiceWorker()
