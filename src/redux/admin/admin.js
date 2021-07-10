import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EventData } from "../../data/events";
import { apiCallBegan } from "../api";

const newDate = new Date();

const initialState = {
  days: [],
  dayselected: {
    day: newDate.getDate(),
    month: newDate.getMonth(),
    year: newDate.getFullYear(),
  },
  eventdata: EventData,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // data: ( state, action ) =>{
    //   console.log("Data", action)
    //   if( state.datalink === '/admin/product'){
    //     state.product.data = action.payload
    //     state.product.status = 'loaded'
    //   }
    //   else if( state.datalink === '/admin/userlist' ){
    //     state.userlist.data = action.payload
    //   }
    //   else{
    //     state.product.status  = action.payload
    //   }
    // },
    // loading: ( state, action )=>{
    //   console.log("loading", action)
    // },
    // error:( state, action )=>{
    //   console.log("Error", action)
    // },
    // datalink: (state, action)=>{
    //   state.datalink = action.payload
    // }

    allDay: (state, action) => {
      state.days = action.payload;
    },
    addEvent: (state, action) => {
      state.eventdata = action.payload;
      // console.log(action.payload)
    },
    dayClick: (state, action) => {
      state.dayselected = action.payload;
    },
    deleteEvent: (state, action) => {
      const Filter = (parent, child) => {
        console.log("Parent", parent, "child", child)
        const f = state.eventdata.map((item) => {
          if (item.id === parent) {
            const newEvent = [];
            item.events.map((ite) => {
              if (ite.id !== child) {
                newEvent.push(ite);
              }
            });
            const UpdatedItem = {
              id: item.id,
              month: item.month,
              year: item.year,
              day: item.day,
              date: item.date,
              events: newEvent
            }
            return UpdatedItem
          }
          else{
            return item
          }
        });
        return f
      };
      state.eventdata = Filter(action.payload.parent, action.payload.child);
    },
  },
});

export const { allDay, dayClick, deleteEvent, addEvent } = dataSlice.actions;

export const selectData = (state) => state.data;

export const loadData = (url) => (dispatch, getState) => {
  console.log("Url", url);
  return dispatch(
    apiCallBegan({
      url,
      onStart: loading.type,
      onSuccess: data.type,
      onError: error.type,
    })
  );
};

export default dataSlice.reducer;
