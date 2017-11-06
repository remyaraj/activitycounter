import '../stylesheets/ui.scss'



const percentToDecimal = (decimal) => {
    return ((decimal * 100) + '%')
}

const calculateGoalProgress = (total, goal) => {
    return percentToDecimal(total / goal)
}

export const RunDayCount = (props) => (

    <
    div className = "run-day-count" >
    <
    div className = "total-days" >
    <
    span > { props.total } < /span> <
    span > Days < /span> < /
    div > <
    div className = "gym-days" >
    <
    span > { props.gym } < /span> <
    span > Days < /span> < /
    div > <
    div className = "beach-days" >
    <
    span > { props.beach } < /span> <
    span > Days < /span> < /
    div > <
    div >
    <
    span > { calculateGoalProgress(props.total, props.goal) } < /span> < /
    div > <
    /div>
)