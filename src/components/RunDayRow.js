import BeachAccess from 'react-icons/lib/md/beach-access';
import DirectionsRun from 'react-icons/lib/md/directions-run';
import Calendar from 'react-icons/lib/fa/calendar';
import { PropTypes } from 'react'

export const RunDayRow = ({ location, date, gym, beach }) => ( <
    tr >
    <
    td > { date.getMonth() + 1 }
    /{date.getDate()}/ { date.getFullYear() } <
    /td> <
    td > { location } <
    /td> <
    td > {
        (gym) ? < DirectionsRun / > : null
    } <
    /td> <
    td > {
        (beach) ? < BeachAccess / > : null
    } <
    /td> < /
    tr >
)

RunDayRow.propTypes = {
    location: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    gym: PropTypes.bool,
    beach: PropTypes.bool
}
