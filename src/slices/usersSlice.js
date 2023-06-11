import { createSlice } from '@reduxjs/toolkit'
//import { useState } from 'react'

const initialState = {
    users:[],
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
            if(user.id!==action.payload)
            return user
        })
                              
       },

       editUser:(state,action)=>{
        state.users=state.users.map((user)=> {
            if(user.id===action.payload.id){
                return action.payload.NewData
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


export const {increaseCount, decreaseCount, addNumber, addUser, editUser  } = usersSlice.actions;

export  default usersSlice.reducer