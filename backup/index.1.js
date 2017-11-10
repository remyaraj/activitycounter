import React from 'react'
import { render } from 'react-dom'
// import { RunDayList } from './components/RunDayList'
import { App } from './components/App'

window.React = React;

render( <
    App / > ,
    document.getElementById('react-container')
)

// render( < RunDayList days = {
//         [{
//                 location: "Thiruvanmiyur Beach",
//                 date: new Date("1/9/2017"),
//                 gym: false,
//                 beach: true
//             },
//             {
//                 location: "Ramaniyam Gym",
//                 date: new Date("4/9/2017"),
//                 gym: true,
//                 beach: false
//             },
//             {
//                 location: "Kottivakkam",
//                 date: new Date("6/9/2017"),
//                 gym: false,
//                 beach: false
//             }
//         ]
//     }
//     /> ,
//     document.getElementById('react-container')
// )