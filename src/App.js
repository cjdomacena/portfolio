import './App.css';
import Navbar from './Components/Navigation/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Pages/Home';
import { ThemeProvider } from 'styled-components';
import { theme } from './Components/Theme';

function App() {
  return (

      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Navbar />
            <Route>
              <Home></Home>
            </Route>
          </Router>
        </div>
      </ThemeProvider>
  );
}

export default App;
