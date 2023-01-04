import React from "react";
import "./App.css";
import Header from "./component/Header";
import ListItems from "./component/ListItems";
 
class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <ListItems />
      </div>
    );
  }
}
 
export default App;