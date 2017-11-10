import { createClass } from 'react'
import { RunDayList } from './RunDayList';
import { RunDayCount } from './RunDayCount';

export const App = createClass({

    getInitialState() {
        return {
            allRunDays: [{
                    location: "Thiruvanmiyur Beach",
                    date: new Date("1/9/2017"),
                    gym: false,
                    beach: true
                },
                {
                    location: "Ramaniyam Gym",
                    date: new Date("4/9/2017"),
                    gym: true,
                    beach: false
                },
                {
                    location: "Kottivakkam",
                    date: new Date("6/9/2017"),
                    gym: false,
                    beach: false
                }
            ]

        }
    },

    countDays(filter) {
        const { allRunDays } = this.state;
        return allRunDays.filter((day) => (filter) ? day[filter] : day).length
    },

    render() {
        return ( <
            div className = "app" >
            <
            RunDayList days = { this.state.allRunDays }
            /> <
            RunDayCount total = { this.countDays() }
            gym = { this.countDays("gym") }
            beach = { this.countDays("beach") }
            /> <
            /div>
        )
    }
})