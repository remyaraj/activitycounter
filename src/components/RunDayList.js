import BeachAccess from 'react-icons/lib/md/beach-access';
import DirectionsRun from 'react-icons/lib/md/directions-run';
import Calendar from 'react-icons/lib/fa/calendar';
import { RunDayRow } from './RunDayRow';


export const RunDayList = ({ days }) => ( <
    table >
    <
    thead >
    <
    tr >
    <
    th > Date < /th> <
    th > Location < /th> <
    th > Gym < /th> <
    th > Beach < /th> < /
    tr > <
    /thead> <
    tbody > {
        days.map((day, i) =>
            // <RunDayRow key={i} 
            //         location={day.location}
            //         date={day.date}
            //         gym={day.gym}
            //         beach={day.beach}/>
            <
            RunDayRow key = { i } {...day }
            />
        )
    } </tbody> 
</table >
)

RunDayList.propTypes = {
    days: function(props) {
        if (!Array.isArray(props.days)) {
            return new Error(
                "RunDayList should be an array"
            )
        } else if (!props.days.length) {
            return new Error(
                "RunDayList must have at least one record"
            )
        } else {
            return null
        }
    }
}
