import logo from './assets/logo.svg';
import './App.css';
import Layout from './components/layout';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <Layout>
        <p>This is a children</p>
      </Layout>
      </header>
    </div>
  );
}

export default App;
