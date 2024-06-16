import React from 'react';
import './style.css';
import { useState, createContext, useContext } from 'react';
var appContext;
const App = ({ children }) => {
  const [user] = useState({ name: 'Jessie Hall', age: 16 });
  appContext = createContext();
  // <appContext.Provider value={user}>{children }</appContext.Provider>;

  return (
    <> <appContext.Provider value={user}>
      <Component1 />
      {/* <Component5 /> */}
      </appContext.Provider>
    </>
  );
};

function Component1() {
  const user = useContext(appContext);

  return (
    <>
      <h1>component 1 </h1>
      <h1>{`Hello ${user.name}!`}</h1>
      <Component2/>
    </>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={} />
    </>
  );
}

function Component3({}) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={} />
    </>
  );
}

function Component4({  }) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={} />
    </>
  );
}

function Component5() {
  const user = useContext(appContext);
  return (
    <>
      {<h1>Component 5</h1>}
      <h2>{`Hello ${user.name} again!`}</h2>
    </>
  );
}

export default App;
