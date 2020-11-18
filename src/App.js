import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/home/Header';
import TopLeftName from './components/TopLeftName';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Router>
      <TopLeftName />
      <Switch>
        <Route exact path="/" component={Header}/>
        <Route exact path="/projects" 
        render={props => <Projects {...props}
        title="Projects"
        />}
        />
        <Route exact path="/contact" 
        render={props => <Contact {...props}
        title="Contact"
        />}
        />
      </Switch>
    </Router>
  );
}

export default App;
