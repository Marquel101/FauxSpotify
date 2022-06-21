import './App.css';
import Layout from './component/Layout/Layout';
import Splash from './screens/Splash';

function App() {
  return (
    <div className="App">
      <Layout>
        <Splash />
      </Layout>
    </div>
  );
}

export default App;
