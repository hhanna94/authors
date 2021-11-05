import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './views/Home';
import NewAuthor from './views/NewAuthor';
import UpdateAuthor from './views/UpdateAuthor';

function App() {
  return (
    <BrowserRouter>
      <h1 className="text-center mt-3">Favorite Authors</h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/new">
          <NewAuthor />
        </Route>
        <Route exact path="/edit/:id">
          <UpdateAuthor />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
