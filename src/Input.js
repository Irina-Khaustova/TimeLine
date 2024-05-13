import { useState } from "react";
import { useDispatch } from "react-redux";
import { setValueOnStore } from "./store/slices/sliceTimeLine";

export default function Input (props){

    const {type, id, lable} = props;

    const dispatch = useDispatch();
    const [value, setValue] = useState();

    const handleChangeValue = (evt) => {
       setValue(evt.target.value);
       console.log()
       dispatch(setValueOnStore({id: id, value: evt.target.value}));
    }

  
    return (
        <div className="input-item">
            <input id={id} type={type} value={value} onChange={handleChangeValue}></input>
            <label htmlFor={id}>{lable}</label>
        </div>
    )
}