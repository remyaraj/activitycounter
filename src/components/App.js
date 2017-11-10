import { Component } from 'react'
import { RunDayList } from './RunDayList';
import { RunDayCount } from './RunDayCount';
import { AddDayForm } from './AddDayForm';

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
    }

    countDays(filter) {
        const { allRunDays } = this.state;
        return allRunDays.filter((day) => (filter) ? day[filter] : day).length
    }

    render() {
        return ( < div className = "app" > {
                (this.props.location.pathname === "/") ?

                <
                RunDayCount total = { this.countDays() }
                gym = { this.countDays("gym") }
                beach = { this.countDays("beach") }
                /> :
                (this.props.location.pathname === "/add-day") ?
                <
                AddDayForm / > :
                <
                RunDayList days = { this.state.allRunDays }
                /> 
            } <
            /div >
        )
    }
}
