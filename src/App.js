import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/home/Header';
import TopLeftName from './components/TopLeftName';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Router basename='/'>
      <TopLeftName />
      <Switch>
        <Route exact path="/" component={Header}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
