import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timeLineList: [],
  postTime: '',
  postName: '',
  newPost: '',
};

export const timeLineSlice = createSlice({
  name: "timeLine",
  initialState,
  reducers: {
    putPost: (state, action) => {
        let date = new Date(action.payload.postTime)
        let dateMill = date.getTime()
        
      console.log(action.payload.postTime)
      let newList = state.timeLineList
      newList.push({time: action.payload.postTime, name: action.payload.postName, post: action.payload.newPost, dateSort: dateMill, position: '', id: `${Math.random()}`})
      newList.sort((a,b) => a.dateSort-b.dateSort)
      state.timeLineList = newList;
    },

    deletePost: (state, action) => {
      console.log(action.payload.id)
      let List = state.timeLineList;
      let newList = List.filter(el => el.id !== action.payload.id)
      console.log(newList)
      state.timeLineList = newList;
    },
    setValueOnStore: (state, action) => {
        state[action.payload.id] = action.payload.value;
      },
  },
});

export const { putPost, deletePost, setValueOnStore } = timeLineSlice.actions;
export const timeLine = (state) => state.timeLineSlice;
export default timeLineSlice.reducer;