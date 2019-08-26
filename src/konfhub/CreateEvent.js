import React from 'react';
import ToolTip from '../components/ToolTip';
import BasicDetails from './BasicDetails';

const CreateEvent = (props) => {
    return(
        <div>
            <ToolTip />
            <br />
            <div className="container">
            <section className="hero is-dark">
                <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        Basic Details
                    </h1>
                </div>
                </div>
            </section>
            </div>
            <div className="container">
                <BasicDetails props={props} />
            </div>
            <br/>
        </div>
    )
};

export default CreateEvent;