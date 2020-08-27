import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// import drizzle functions and contract artifact
import { Drizzle } from "@drizzle/store";
import IpfsHashContract from "./contracts/ipfsHashContract.json";

const options = {
  contracts: [IpfsHashContract],
  web3: {
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545",
    },
  },
};

const drizzle = new Drizzle(options);


ReactDOM.render(
    <React.StrictMode>
      <App drizzle={drizzle} />
    </React.StrictMode>,
    document.getElementById("root")
  );

serviceWorker.register();
