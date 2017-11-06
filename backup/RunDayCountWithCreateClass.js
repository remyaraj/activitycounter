import React from 'react'
import '../stylesheets/ui.scss'

export const RunDayCount = React.createClass({

    percentToDecimal(decimal) {
        return ((decimal * 100) + '%')
    },
    calculateGoalProgress(total, goal) {
        return this.percentToDecimal(total / goal)
    },

    render() {

        return ( <
            div className = "run-day-count" >
            <
            div className = "total-days" >
            <
            span > { this.props.total } < /span> <
            span > Days < /span> <
            /div> <
            div className = "gym-days" >
            <
            span > { this.props.gym } < /span> <
            span > Days < /span> <
            /div> <
            div className = "beach-days" >
            <
            span > { this.props.beach } < /span> <
            span > Days < /span> <
            /div> <
            div >
            <
            span > { this.calculateGoalProgress(this.props.total, this.props.goal) } < /span> <
            /div> <
            /div>
        )
    }
})