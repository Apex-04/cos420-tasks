import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>Hello World</h1>
            <img src="logo192.png" alt="React Logo" />
            <ul>
                <li>Item One</li>
                <li>Item Two</li>
                <li>Item Three</li>
            </ul>
        <Button onClick={() => { console.log("Hello World!") }}>
                Log Hello World
            </Button>
            <div style={{ backgroundColor: "red" }}>Red Background Element</div>
            <hr />
            <Counter />
            <hr />
            <RevealAnswer />
            <hr />
            <TwoDice />
            <hr />
            <ChangeType />
        </div>
    );
}

export default App;