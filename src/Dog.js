import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {incrementByAmount} from "./redux/dogcounter-slice";


function Dog() {
  const [dogImg, setDogImg] = useState(null);

  const state = useSelector(state => state.counter);
  
  const dispatch = useDispatch();
  useEffect( () => {
    console.log("dispatching in Dog comp ..");
    dispatch(incrementByAmount(1));
  },[dispatch])

  const fetchDoggo = () => {
    setDogImg("");
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then((res) => res.json())
      .then((dogInfo) => {
        setDogImg(dogInfo.message);
      });
  };

  useEffect(() => {
    if (dogImg === null) {
      fetchDoggo();
    }
  });

  return (
    <div>
        <h3>Doggo of the day</h3>
        <div>
          <button onClick={() => fetchDoggo()}>New Doggo</button>
        </div>
        {dogImg !== "" ? (
          <div>
            <img src={dogImg} width="400px" alt="doggo" />
          </div>
        ) : (
          <div>Loading Image</div>
        )}
    </div>
  );
}

export default Dog;
