import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import rootStore from "./store/rootStore";

ReactDOM.render(
  <Provider
    rootStore={rootStore}
    loginStore={rootStore.loginStore}
    registerStore={rootStore.registerStore}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);
