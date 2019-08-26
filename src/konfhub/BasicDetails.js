import React, {useState} from 'react';
import InputBox from '../components/InputBox';
import { stringify } from 'querystring';
import { async } from 'q';
const BasicDetails = (props) => {
    console.log(props)
    const [eventName, setEventname] = useState("");
    const [eventDescription, setEventDesc] = useState("");
    const [eventStartDate, setStartDate] = useState("");
    const [eventEndDate, setEndDate] = useState("");
    const [eventType, setEventType] = useState("paid");
    const [eventVenue, setEventVenue] = useState("");

    const checkForTheValidations = () => {
        getValue();
    };

    const getValue = async() => {
        const _data = await {
            "event_name":eventName,
            "event_des" : eventDescription,
            "start_date" : eventStartDate,
            "end_date":eventEndDate,
            "event_type":eventType,
            "event_venue":eventVenue
        }

        await localStorage.setItem("basicDetails", JSON.stringify(_data));
        props.props.history.push('/dashboard');
    };
    
    return(
        <section className="section section-border">
            <div className="container">
                <div className="field">
                    <label className="label">Event name</label>
                    <div >
                        <InputBox type="text" name="Event name" setInputData={setEventname}  value={eventName}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                        <textarea className="textarea" value={eventDescription} placeholder="Textarea" onChange={e => {setEventDesc(e.target.value)}}></textarea>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Start Date</label>
                        <InputBox value={eventStartDate} type="date" name="start Date" RightIcon="calendar" leftIcon="calendar" setInputData={setStartDate} />
                </div>
                <div className="field">
                    <label className="label">Start Date</label>
                        <InputBox value={eventEndDate} type="date" name="End Date" RightIcon="calendar" leftIcon="calendar" setInputData={setEndDate} />
                </div>
                <div className="field">
                    <label className="label">Event Type</label>
                    <div className="field">
                        <div className="select">
                            <select value={eventType} onChange={e => {setEventType(e.target.value)}}>
                                <option>Paid</option>
                                <option>Free</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Venue</label>
                        <InputBox value={eventVenue} type="text" name="Venue" RightIcon="google" leftIcon="map-marker" setInputData={setEventVenue} />
                </div>
                <div className="field">
                    <button className="button is-primary" onClick={e => {checkForTheValidations()}}  >Create</button>
                </div>
            </div>
        </section>
    )
};

export default BasicDetails;