import React, {useState} from 'react';

const InputTags = (props) => {
    const [data,setData] = useState(props.data == undefined ? [] : props.data);
    const [newData, setNewData] = useState("");
    const _hasLeftIcon = props.leftIcon !== undefined ? " has-icons-left" : "";
    const _hasRightIcon = props.rightIcon !== undefined ? props.loading === "" || props.loading === undefined ? " has-icons-right" : "" : "";
    const _isLoading = props.loading !== undefined ? props.loading : "";
    const deleteTag = (v) => {
        const _tempData = data.filter((e,i) => {
            return i !== v
        });
        setData(_tempData);
    }

    const createTags = (v) => {
        if( v == 13 || v == 32){
            const _tempData = data.filter(e => {
                return e == newData
            })
            const _maxTag = props.maxElement === undefined ? 100 : props.maxElement;
            if(data.length < _maxTag && !_tempData.length)setData([...data,newData])
            setNewData("");
        }else if(v == 8 && newData === ""){
                deleteTag(data.length - 1);
            }
    };

    return(
        <div>
            {
                data.map((v,i) => {
                    return(
                        <Tags data={v} deleteTag={deleteTag} key={i} index={i}/>
                    )
                })
            }
            <div className={"control "+ _isLoading + _hasRightIcon + _hasLeftIcon}>
                <input type="text" value={newData} className="input" placeholder={props.placeholder} onChange = {e => {setNewData(e.target.value)}} onKeyDown={e => {createTags(e.keyCode)}} />
                <LeftIcon font={props.leftIcon}/>
            </div>
        </div>
    )
};

const Tags = (props) => {
    
    return(
        <span className="tag is-light is-rounded">{props.data} &nbsp;<i style={styles.showPointer} className="fa fa-close" onClick={e=>{props.deleteTag(props.index)}}></i></span>
        
    )
}

const LeftIcon = (props) => {
    return(
        <span className="icon is-small is-left">
            <i className={"fa fa-"+props.font}></i>
        </span>
    )
}

const styles = {
    showPointer:{
        cursor: "pointer"
    }
}

export default InputTags;