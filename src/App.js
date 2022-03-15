import './App.css';
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Contact from './components/pages/Contact'
import Header from './components/layout/Header'
import NotFound from './components/pages/NotFound'
import Add from './components/pages/Add'
import Service from './components/pages/Service'
import Classes from'./components/pages/Classes'
import GetIdFromParams from './components/GetIdFromParams';
// three things needed to define routes with react-router-dom
import {
  BrowserRouter as Router, // alias browser router => router
  Routes,
  Route
} from 'react-router-dom'
import serviceDetails from './data/serviceDetails'

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
              exact path="/services"
              element={<Services services={serviceDetails} />}
            />

            {/* 
            details pages in react router rules
            rule 1: the details page should be /page/:id
            rule 2: you need to exact path the less specific page
            rule 3: both paths shoud be given the same props
            rule 4: pls never send data through react router dom links (in react/stateful app state is alwyas the single source of truth)
            */}
            <Route 
              path="services/:id"
              element={<Service services={serviceDetails}/>}
            />           
            <Route 
              path="/contact"
              element={<Contact />}
            />

            <Route 
              path="/add/:x/:y" // /add/10/30 => 40
              element={<Add />}
            />

            <Route 
              path="/classes/:classId"
              element={<GetIdFromParams ClassComponent={Classes} />}
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
