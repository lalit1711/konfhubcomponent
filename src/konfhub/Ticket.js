import React, { useState } from 'react';

const Ticket = (props) => {
    const _tickets = JSON.parse(localStorage.getItem("ticket"));
    const [addTicket, setAddTicket] = useState(false);
    const [showAdOp, setShowAdvOp] = useState(false);
    const [tickets, setTickets] = useState(() => { return _tickets === null ? [] : _tickets })
    const [name, setName] = useState("");
    const [sDate, setsDate] = useState(new Date());
    const [eDate, seteDate] = useState("");
    const [desp, setDesp] = useState("No");
    const [price, setPrice] = useState("");
    const [currency, setCurrency] = useState("INR");
    const [avancd, setAdvance] = useState({
        min_ticket:1,
        max_ticket:100,
        pos:1,
        venue:"Agra",
        waitlist:false,
        soldout:false,
        pg:true,
        tax:"gst"})
        console.log(tickets);
    const addTicketToLocal = () => {
        const _data = {
            name:name,
            s_date:sDate,
            e_date:eDate,
            desp:desp,
            price:price,
            currency:currency,
            Advanced:avancd
        }
        localStorage.setItem("ticket", JSON.stringify([...tickets,_data]));
        setTickets([...tickets, _data]);
        setAddTicket(false);
    }
    if (!addTicket) {
        return (
            <div className="container">
                {
                    tickets.map(e => {
                        return (
                            <article className="message is-dark">
                                <div className="message-body">
                                    {e.name}
                                </div>
                            </article>
                        )
                    })
                }
                <hr/>

                <button className="button is-primary" onClick={ e => {setAddTicket(()=>{return !addTicket})}}>Add Ticket</button>
            </div>
        )
    } else {
        return (
            <div className="container">
                <div className="columns">
                    <div className="column is-two-fifths">
                        <div className="field">
                            <label className="label">Ticket name</label>
                            <div >
                                <input className="input" type="text" placeholder="Ticket name" value={name} onChange={e => {setName(e.target.value)}} />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label">Start Date</label>
                            <div >
                                <input className="input" type="date" placeholder="start date" value={sDate} onChange={e => {setsDate(e.target.value)}} />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label">End Date</label>
                            <div >
                                <input className="input" type="date" placeholder="End Date" value={eDate} onChange={e => {seteDate(e.target.value)}} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-three-fifths">
                        <div className="field">
                            <label className="label">Description</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="Textarea"  onChange={e => {setDesp(e.target.value)}} value={desp}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="columns">
                            <div className="column is-gapless">
                                <label className="label">Ticket price</label>
                                <input className="input" type="number" placeholder="price" value={price} onChange={e => {setPrice(e.target.value)}} />
                            </div>
                            <div className="column is-gapless">
                                <div className="field">
                                    <label className="label">Currency</label>
                                    <div className="field">
                                        <div className="select">
                                            <select value={currency} onChange={e => {setCurrency(e.target.value)}} >
                                                <option value="INR">INR</option>
                                                <option value="Dollar">Dollar</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AdvancedOption show={showAdOp} setShowAdvOp={setShowAdvOp} adv={avancd} setAdvance={setAdvance} />
                <br />
                <div className="columns">
                    &nbsp;
                    <button className="button is-primary is-pulled-right" type="" onClick={e => {addTicketToLocal()}}>Add</button>
                </div>
            </div>
        )
    }
};

function AdvancedOption(props) {
    const [adv, setAdv] = useState(props.show);
    if (!adv) {
        return (
            <div className="columns">
                <div className="column"></div>
                <div className="column">
                    <p className="buttons">
                        <a className="button" onClick = {e => {setAdv(()=> {
                            return !adv;
                        })}}>
                            <span className="icon">
                                <i className="fa fa-arrow-down"></i>
                            </span>
                            <span>Advanced Options</span>
                        </a>
                    </p>
                </div>
                <div className="column"></div>
            </div>
        )
    }
    else{
        return(
            <div>
                <div className="columns">
                    <div className="column">
                        <label className="label">Minimum Ticket</label>
                        <input className="input" type="number" placeholder="1" value={props.adv.min_ticket} onChange={e => {props.setAdvance({
                            min_ticket:e.target.value,
                            max_ticket:props.adv.max_ticket,
                            pos:props.adv.pos,
                            venue:props.adv.venue,
                            waitlist:props.adv.waitlist,
                            soldout:props.adv.soldout,
                            pg:props.adv.pg,
                            tax:props.adv.tax
                        })}} />
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label">Venue</label>
                            <div className="field">
                                <div className="select">
                                    <select value={props.advvenue} onChange={e => {props.setAdvance({
                                        min_ticket:props.adv.min_ticket,
                                        max_ticket:props.adv.max_ticket,
                                        pos:props.adv.pos,
                                        venue:e.target.value,
                                        waitlist:props.adv.waitlist,
                                        soldout:props.adv.soldout,
                                        pg:props.adv.pg,
                                        tax:props.adv.tax
                                    })}}>
                                        <option>Agra</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <label className="label">
                            Sold Out
                        </label>
                        <input type="checkbox" checked={props.adv.soldout} onChange={e => {props.setAdvance({
                            min_ticket:props.adv.min_ticket,
                            max_ticket:props.adv.max_ticket,
                            pos:props.adv.pos,
                            venue:props.adv.venue,
                            waitlist:props.adv.waitlist,
                            soldout:e.target.checked,
                            pg:props.adv.pg,
                            tax:props.adv.tax
                        })}} />
                            &nbsp; mark ticket as Sold out
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <label className="label">Maximum Ticket</label>
                        <input className="input" type="number" placeholder="100" value={props.adv.max_ticket} onChange={e => {props.setAdvance({
                            min_ticket:props.adv.min_ticket,
                            max_ticket:e.target.value,
                            pos:props.adv.pos,
                            venue:props.adv.venue,
                            waitlist:props.adv.waitlist,
                            soldout:props.adv.soldout,
                            pg:props.adv.pg,
                            tax:props.adv.tax
                        })}}  />
                    </div>
                    <div className="column">
                        <label className="label">
                            Allow waitlist
                        </label>
                        <input type="checkbox" checked={props.adv.waitlist} onChange={e => {props.setAdvance({
                            min_ticket:props.adv.min_ticket,
                            max_ticket:props.adv.max_ticket,
                            pos:props.adv.pos,
                            venue:props.adv.venue,
                            waitlist:e.target.checked,
                            soldout:props.adv.soldout,
                            pg:props.adv.pg,
                            tax:props.adv.tax
                        })}}  />
                            &nbsp; waitlist
                    </div>
                    <div className="column">
                        <label className="label">
                            Add Pg Charges
                        </label>
                        <input type="checkbox" checked={props.adv.pg} onChange={e => {props.setAdvance({
                            min_ticket:props.adv.min_ticket,
                            max_ticket:props.adv.max_ticket,
                            pos:props.adv.pos,
                            venue:props.adv.venue,
                            waitlist:props.adv.waitlist,
                            soldout:props.adv.soldout,
                            pg:e.target.checked,
                            tax:props.adv.tax
                        })}}  />
                            &nbsp; PG charges
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <label className="label">Ticket Postion</label>
                        <input className="input" type="number" placeholder="1" value={props.adv.pos} onChange={e => {props.setAdvance({
                            min_ticket:props.adv.min_ticket,
                            max_ticket:props.adv.max_ticket,
                            pos:e.target.value,
                            venue:props.adv.venue,
                            waitlist:props.adv.waitlist,
                            soldout:props.adv.soldout,
                            pg:props.adv.pg,
                            tax:props.adv.tax
                        })}}  />
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label">Add Tax</label>
                            <div className="field">
                                <div className="select">
                                    <select value={props.adv.tax} onChange={e => {props.setAdvance({
                                        min_ticket:props.adv.min_ticket,
                                        max_ticket:props.adv.max_ticket,
                                        pos:props.adv.pos,
                                        venue:props.adv.venue,
                                        waitlist:props.adv.waitlist,
                                        soldout:props.adv.soldout,
                                        pg:props.adv.pg,
                                        tax:e.target.value
                                    })}}  >
                                        <option value="gst">GST</option>
                                        <option value="tax">Tax</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column"></div>
                </div>
                <div className="cloumns">
                    <div className="column"></div>
                    <div className="column">
                        <p className="buttons">
                            <a className="button" onClick = {e => {setAdv(()=> {
                                return !adv;
                            })}}>
                                <span className="icon">
                                    <i className="fa fa-arrow-up"></i>
                                </span>
                                <span>Hide Advanced Options</span>
                            </a>
                        </p>
                    </div>
                    <div className="column"></div>
                </div>
            </div>
        )
    }
}

export default Ticket;