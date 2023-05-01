import { createRoot } from "react-dom/client"
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { Worldly } from './Worldly';

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <Worldly />
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

