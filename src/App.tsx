import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
        </header>
        <h2>Andrew Bobay Fork</h2>
        <h3> hello world</h3>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
        </p>


        <div className="red" style={{ backgroundColor: 'red' }}> {/* and i thought tailwind was bad */}
          <Button onClick={ () => { console.log("Hello World!") } }>Log Hello World</Button>
          <img src="../assets/images/pet-ada.jpg" alt="A picture of my dog Ada" />
          Unordered List:
              <ul>
                  <li>First thing</li>
                  <li>Another thing</li>
                  <li>A third item</li>
              </ul>

          </div>;

      </div>

    );
}

export default App;
