import React, {useState} from 'react';
import ToolTip from '../components/ToolTip';
import DashBoardAction from './DashBoardAction';
import Action from './Action';

const DashBoard = (props) => {
    const _eventDetails = JSON.parse(localStorage.getItem("basicDetails"));
    console.log(_eventDetails);
    const [eventName, setEventName] = useState(_eventDetails.event_name);

    return(
        <div>
            <ToolTip />
            <br />
            <div className="container">
            <section className="hero is-dark">
                <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        {_eventDetails.event_name}
                    </h1>
                </div>
                </div>
            </section>
            </div>
            <br />
            <div className="container">
                <div className="columns">
                    <div className="column is-one-fifth section-border"><DashBoardAction /></div>
                    <div className="column section-border"><Action /></div>
                </div>
            </div>
            <br/>

        </div>
    )
};

export default DashBoard;