import React from 'react'
import { render } from 'react-dom'
import { RunDayCount } from './components/RunDayCount'

window.React = React;

render( <
    RunDayCount total = { 50 }
    gym = { 20 }
    beach = { 10 }
    goal = { 100 }
    / > ,
    document.getElementById('react-container')
)