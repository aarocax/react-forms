// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import About from './components/Content/Pages/About/About';
import Home from './components/Content/Pages/Home/Home';
import Blog from './components/Content/Pages/Blog/Blog';



// Container
//import Home from './containers/Home';
//import Library from './containers/Library';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/" render={ (props) => <Home title="Es la home page" isAuthed={true} /> } parametro="hola"/>
    </Switch>
  </App>;



export default AppRoutes;