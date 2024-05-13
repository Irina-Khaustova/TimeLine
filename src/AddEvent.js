import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import formValidation from "./formValidation";
import { putPost } from "./store/slices/sliceTimeLine";
import { useState } from "react";

export default function AddEvent (){

    const dispatch = useDispatch();
    const {postTime, postName, newPost} = useSelector(state => state.timeLine);
    const [message, setMessage] = useState('')

    const handleClick= () => {
      let resultValidation = formValidation(postTime, postName, newPost)
      console.log(resultValidation)
      if (resultValidation === '') {
        dispatch(putPost({postTime: postTime, postName: postName, newPost: newPost}))
      } else {
        setMessage(resultValidation);
      }
    }
  
    return (
        <div className=''>
            <Input className="form-input" id="postTime" type="date" lable="Введите дату"></Input>
            <Input className="form-input" id="postName" type="text" lable="Введите название поста"></Input>
            <Input className="form-input" id="newPost" type="textArea" lable="Введите текст"></Input>
            <button className="form-button" onClick={handleClick}>Сохранить</button>
            <div className="">{message}</div>
        </div>
    )
}