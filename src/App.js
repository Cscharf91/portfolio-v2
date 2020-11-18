import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/home/Header';
import TopLeftName from './components/TopLeftName';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <TopLeftName />
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Header}/>
        <Route exact path={process.env.PUBLIC_URL + '/projects'} component={Projects}/>
        <Route exact path={process.env.PUBLIC_URL + '/contact'} component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
