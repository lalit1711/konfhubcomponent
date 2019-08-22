import React,{useState} from 'react';

const AutoComplete = (props) => {
    const[value, setValue] = useState(props.value);
    const[AutoComp, setAutoComp] = useState("true")
    const _hasLeftIcon = props.leftIcon !== undefined ? " has-icons-left" : "";
    const _hasRightIcon = props.rightIcon !== undefined ? props.loading === "" || props.loading === undefined ? " has-icons-right" : "" : "";
    const _isLoading = props.loading !== undefined ? props.loading : "";
    const changeTheValue = (v) => {
        console.log(v);
        v = v.value;
        if(v.trim()!== ""){
            setAutoComp("true");
            setValue(v);
        }else{
            setValue("");
        }
    }

    const setDataFromChild = (v) => {
        setAutoComp("false");
        setValue(v);
    }

    return(
        <nav className="">
        <div className="">
            <div className={"control " + _isLoading + _hasLeftIcon + _hasRightIcon }>
            <input value={value} className="input" type="text" placeholder={props.placeholder} onKeyDownCapture={e => {console.log(e.key)}} onChange={e => {changeTheValue(e.target)}} />
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
        </div>
            <SearchElement keytearm={value} setValue = {setDataFromChild} autocom={AutoComp} data={props.data} />
        </nav>
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
            <span className="icon is-small is-right">
                <i className={"fa fa-"+props.font}></i>
            </span>
    )
}


const SearchElement = (props) => {
    const data=props.data
    let _data = [];
    const _key = props.autocom === "true" ? props.keytearm : "";
    if(_key!== ""){
        _data = data.filter(v=> {
            return v.toLowerCase().indexOf(_key.toLowerCase()) > -1
        });
    }else{
        _data = []
    }
    const setValue = (v) => {
        _data = [];
        props.setValue(v);
    }
    if(_data.length){
        return(
            <div style={styles.auto}>
            {
                _data.map((v,i) => {
                    return(
                        <span key={i}  className="panel-block is-active" onClick ={e => {setValue(v)}}>
                            {v}
                        </span>
                    )
                })
            }
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
};

const styles = {
    auto:{
        overflow: "auto",
        "zIndex": 1000,
        "background": "white",
        "position": "fixed",
        "width": "100%",
        "paddingHorizontal" : "13px"
    }
}

export default AutoComplete;