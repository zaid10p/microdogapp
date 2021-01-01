import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dog from "./Dog";
import { Provider } from 'react-redux';
import store from "./redux/store";
import { createBrowserHistory } from "history";


const defaultHistory = createBrowserHistory();

function App({history =defaultHistory}) {
  console.log("DOG APP history >> ", history.location);
  return (
    <Provider store={store}>
         <Dog />
    </Provider>
  );
}

export default App;
