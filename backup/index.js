import React from 'react'
import { render } from 'react-dom'
// import { RunDayList } from './components/RunDayList'
import App from './components/App'

window.React = React;

render( <
    App / > ,
    document.getElementById('react-container')
)