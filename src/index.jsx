import React from "react";
import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";
const cors = require('cors');
let allowedOrigins = [...];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) { // If a specific origin isn’t found on the list of allowed origins
      let message = 'The CORS policy for this application doesn’t allow access from origin ' + origin;
      return callback(new Error(message), false);
    }
    return callback(null, true);
  }
}));
import { Container, Row } from "react-bootstrap";
import "./index.scss";

// main React component
class DNMApplication extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <h1 className="text-dark text-center p-3 m-0 w-100">
            All the movies
          </h1>
        </Row>
        <MainView />
      </Container>
    );
  }
}

// 'container' is the root DOM element
const container = document.getElementsByClassName("app-container")[0];
const root = createRoot(container);

// this tells React to render the app in the root DOM element
// ReactDOM.render(React.createElement(DNMApplication), container);
root.render(React.createElement(DNMApplication));
