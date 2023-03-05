import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initiFirebase } from "./firebase/config";

import "./index.css";

initiFirebase()

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
