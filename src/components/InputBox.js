import React, {useState} from 'react';
var _valid ={
    email:/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
    url: new RegExp('^((https?:)?\\/\\/)?'+ // protocol
    '(?:\\S+(?::\\S*)?@)?' + // authentication
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i')
};
    
const InputBox = (props) => {
    const [_data,changeData] = useState(props.value);
    const [_class, changeClass] = useState("input")
    const _hasLeftIcon = props.leftIcon !== undefined ? " has-icons-left" : "";
    const _hasRightIcon = props.rightIcon !== undefined ? props.loading === "" || props.loading === undefined ? " has-icons-right" : "" : "";
    const _isLoading = props.loading !== undefined ? props.loading : "";
    const checkForValidation = (v) => {
        if(props.type === "email" || props.type === "url" ){
            const _tempClass = _valid[props.type].test(v) === true ? "input is-success" : "input is-danger";
            changeClass(_tempClass);
        }
        else if(props.case !== undefined){
            v = props.case === "uppercase" ? v.toUpperCase() : props.case === "lowercase" ? v.toLowerCase() : v;
        }
        
        changeData(v);
        props.setInputData(v);
    }
    return(
        <div className={"control " + _isLoading + _hasLeftIcon + _hasRightIcon}>
            <input className={_class} value={_data} type={props.type} placeholder={props.name} onChange = {e => {checkForValidation(e.target.value)}} minLength={props.min_length} maxLength={props.max_length} />
            {
                (()=> {
                    if(props.leftIcon !== undefined){
                        return(
                            <LeftIcon font={props.leftIcon} />
                        )
                    }
                })()
            }{
                (() => {
                    if(props.rightIcon !== undefined){
                        return(
                            <RightIcon font={props.rightIcon} />
                        )
                    }
                })()
            }
        </div>
    )
};

const LeftIcon = (props) => {
    return(
        <span className="icon is-small is-left">
            <i className={"fa fa-"+props.font}></i>
        </span>
    )
}

const RightIcon = (props) => {
    return(
            <span className="icon is-small is-right" onClick={e => {console.log(e)}}>
                <i className={"fa fa-"+props.font}></i>
            </span>
    )
}



export default InputBox;