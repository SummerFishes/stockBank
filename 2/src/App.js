// import logo from './logo.svg';
import './App.css';
import FreGroup from './component/freGroup'
import TradeView from './container/tradeView';
import TableView from './container/tableView';
import ChartView from './container/chartView';

function App() {
  return (
    <div className="App">
      <TradeView/>
      <TableView/>
      <ChartView/>
      {/* <FreGroup/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
