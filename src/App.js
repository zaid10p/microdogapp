import React, { useState, useEffect } from "react";
import "./App.css";
import Dog from "./Dog";
import { Provider } from 'react-redux';
import store from "./redux/store";
import { createBrowserHistory } from "history";
import DogTest from "./dogtest";


//const defaultHistory = createBrowserHistory();

const getComponent = (path = "") => {
  if(path == "/dog"){
    return <Dog />
  }else{
    return <DogTest path={path} />
  }
}

function App({history = {}}) {
  // console.log("DOG APP  >> ", history);
  const {pathname} = history;
  console.log("DOG APP  pathname>> ", pathname);
  return (
    <Provider store={store}>
        {getComponent(pathname)}
         {/* <Dog /> */}
    </Provider>
  );
}

export default App;
