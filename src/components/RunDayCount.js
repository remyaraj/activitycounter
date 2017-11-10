import '../stylesheets/ui.scss'
import BeachAccess from 'react-icons/lib/md/beach-access'
import DirectionsRun from 'react-icons/lib/md/directions-run'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'react'


const percentToDecimal = (decimal) => {
    return ((decimal * 100) + '%')
}

const calculateGoalProgress = (total, goal) => {
    return percentToDecimal(total / goal)
}

export const RunDayCount = ({total=70, gym=20, beach=10, goal=100}) => (

    <
    div className = "run-day-count" >
    <
    div className = "total-days" >
    <
    span > { total } < /span>  <
    Calendar / >
    <
    span > Days < /span>  < /
    div > <
    div className = "gym-days" >
    <
    span > { gym } < /span>  <
    DirectionsRun / >
    <
    span > Days < /span>  < /
    div > <
    div className = "beach-days" >
    <
    span > { beach } < /span>  <
    BeachAccess / >
    <
    span > Days < /span>  < /
    div > <
    div >
    <
    span > { calculateGoalProgress(total, goal) } < /span>  < /
    div > <
    /div>
)

RunDayCount.propTypes = {
    total: PropTypes.number,
    gym: PropTypes.number,
    beach: PropTypes.number,
    goal: PropTypes.number
}
