import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from "uuid";
//import { useState } from 'react'

const initialState = {
    users:[{
        name: "John Add",
        email: "email@example.com",
        gen: 23,
        phone:"0507777778",
        id: uuid(),
      },
      {
        name: "Ama Subtract",
        email: "sub@example.com",
        gen: 23,
        phone:"02446776898",
        id: uuid(),
      },
      {
        name: "Peter Multiply",
        email: "peter@example.com",
        gen: 23,
        phone:"05449823146",
        id: uuid(),
      },],
    number: 0,
    count: 0
};

const usersSlice = createSlice({
    name:"users",
    initialState : initialState,
    reducers : {
       addUser : (state, action) => {
        state.users = [...state.users, action.payload];
       },

       deleteUser:(state,action)=>{
        state.users=state.users.filter((user)=> {
            if(user.id!==action.payload.id)
            return user
        })
                              
       },

       editUser:(state,action)=>{
        state.users=state.users.map((user)=> {
            if(user.id===action.payload.id){
                return action.payload
            }
            return user
        })

       },

      /* addNumber : (state) => {
        state.number=+1
       },
       increaseCount: (state) => {state.count +=1},
       decreaseCount: (state) => {state.count -=1},*/
       
    }

})


export const {addUser, editUser, deleteUser  } = usersSlice.actions;

export  default usersSlice.reducer