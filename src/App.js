import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headers from './components/Headers';
import CreateReadDeleteUser from './components/CreateReadDeleteUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Headers/>
          <Routes>
            <Route path='/CreateUser' exact Component={CreateReadDeleteUser} />
            <Route path='/UpdateUser' exact Component={UpdateUser} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;