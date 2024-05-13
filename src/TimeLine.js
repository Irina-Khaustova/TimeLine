//import { useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { deletePost } from "./store/slices/sliceTimeLine";

export default function TimeLine (){

    
  const {timeLineList} = useSelector(state => state.timeLine)
  
  const dispatch = useDispatch();

  const handleDeletePost = (evt) => {
    console.log(evt.target.parentNode.parentNode)
    dispatch(deletePost({id: evt.target.parentNode.parentNode.id}))
  }
  
    return (
        <div className='timeLine'>
            {timeLineList.map((el, ind )=> <div className={ind = 0 || ind % 2 === 0 ? 'right' : 'left'} key={el.id} id={el.id}>
                <div className="list-content">
                <div className="">{el.time}</div>
                <div className="">{el.name}</div>
                <div className="">{el.post}</div>
                <button className="button-delete" onClick={handleDeletePost}>Удалить</button>
                </div>
            </div>)}     
           </div>
    )
}