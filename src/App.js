// import logo from './logo.svg';
import "./App.css";
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Greet name="Ayo" heroName="Flash">
        <p>This is children props</p>
      </Greet> */}
      {/* <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Diana" heroName="Batman"></Greet> */}
      {/* <Welcome name="Ayo" heroName="Flash"></Welcome> */}
      {/* <Welcome name="Clark" heroName="Superman"></Welcome> */}
      {/* <Welcome name="Diana" heroName="Batman"></Welcome> */}
      {/* <Hello></Hello> */}
      {/* <Message></Message> */}
      <Counter></Counter>
    </div>
  );
}

export default App;
