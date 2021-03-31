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
    authorStore={rootStore.authorStore}
    registerStore={rootStore.registerStore}
    smesStore={rootStore.smesStore}
    smesdetailStore={rootStore.smesdetailStore}
    allProjectStore={rootStore.allProjectStore}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);
