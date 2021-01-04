import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {incrementByAmount} from "./redux/dogcounter-slice";


function DogTest({path}) {
    const state = useSelector(state => state.counter);
   /// console.log("dog state ", state);
    const dispatch = useDispatch();
    useEffect( () => {
      console.log("dispatching in DOGTEST COMP ..");
      dispatch(incrementByAmount(1));
    },[dispatch])
  
    return (
    <div>
        <h3>dog test component path {path}</h3>
        <p>{JSON.stringify(state)}</p>
    </div>)
}

export default DogTest;
