import React, { Component } from "react";
import "./App.css";

import Section from "./components/section";
import Button from "./components/button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Section level={2} title={"1F"} />
            <Section level={4} title={"照明"} />
            <Button>{"ON"}</Button>
            <Button>{"OFF"}</Button>
            <Section level={4} title={"テレビ"} />
            <Button>{"ON"}</Button>
            <Button>{"OFF"}</Button>
            <Section level={4} title={"エアコン"} />
            <Button>{"暖房"}</Button>
            <Button>{"冷房"}</Button>
            <Button>{"OFF"}</Button>
            <Section level={2} title={"2F"} />
            <Section level={4} title={"照明"} />
            <Button>{"ON"}</Button>
            <Button>{"OFF"}</Button>
            <Section level={4} title={"エアコン"} />
            <Button>{"暖房"}</Button>
            <Button>{"冷房"}</Button>
            <Button>{"OFF"}</Button>
          </div>
        </header>
        <main />
      </div>
    );
  }
}

export default App;
