import './App.css';
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Contact from './components/pages/Contact'
import Header from './components/layout/Header'
import NotFound from './components/pages/NotFound'
// three things needed to define routes with react-router-dom
import {
  BrowserRouter as Router, // alias browser router => router
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* ALL REACT ROUTER ROM STUFF MUST GO IN A ROUTER!!!!!!!!!! */}
      <h3>dental health day at the dental spa 🦷</h3>
      <Router> 
        {/* all routes must go in the Routes component */}
        <Header />

        <main>
          <Routes>
            {/* route needs a path and an element. peth = url, element = component */}
            <Route 
              exact path="/"
              element={<Home />}
            />
          
            <Route 
              path="/services"
              element={<Services />}
            />

            
            <Route 
              path="/contact/"
              element={<Contact />}
            />

            {/* 404 ROUTE MUST BE ON BOTTOM */}
            <Route 
              path='*'
              element={<NotFound />}
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
