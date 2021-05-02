import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Projects from './Components/projects/Projects';
import Contact from './Components/Contact/Contact';
import AboutMe from './Components/AboutMe/AboutMe';
import ProjectOne from './Components/projects/projects/projectOne/ProjectOne';
import ProjectTwo from './Components/projects/projects/ProjectTwo/ProjectTwo';
import ProjectThree from './Components/projects/projects/ProjectThree/ProjectThree';
import ProjectFour from './Components/projects/projects/ProjectFour/ProjectFour';

function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/projects'>
              <Projects></Projects>
            </Route>
            <Route path='/aboutMe'>
              <AboutMe></AboutMe>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/projectOne'>
              <ProjectOne></ProjectOne>
            </Route>
            <Route path='/projectTwo'>
              <ProjectTwo></ProjectTwo>
            </Route>
            <Route path='/projectThree'>
              <ProjectThree></ProjectThree>
            </Route>
            <Route path='/projectFour'>
              <ProjectFour></ProjectFour>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
