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
    reportStore={rootStore.reportStore}
    authorStore={rootStore.authorStore}
    registerStore={rootStore.registerStore}
    smesStore={rootStore.smesStore}
    smesdetailStore={rootStore.smesdetailStore}
    smesdataStore={rootStore.smesdataStore}
    allProjectStore={rootStore.allProjectStore}
    editSmesStore={rootStore.editSmesStore}
    myProjectStore={rootStore.myProjectStore}
    addinvesStore={rootStore.addinvesStore}
    inveschartStore={rootStore.inveschartStore}
    invesmentchartStore={rootStore.invesmentchartStore}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);
