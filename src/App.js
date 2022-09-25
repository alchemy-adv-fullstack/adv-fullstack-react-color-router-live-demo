import './App.css';
import {
  Redirect,
  BrowserRouter as Router,
  useParams,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

function RGB() {
  const { r, g, b } = useParams();

  return (
    <div className="fill" style={{ background: `rgb(${r}, ${g}, ${b})` }}>
      <p>{`rgb(${r},${g},${b})`}</p>
    </div>
  );
}

function ScreenColor() {
  return (
    <div>
      <Switch>
        <Route exact path="/rgb/:r/:g/:b">
          <RGB />
        </Route>
        <Route path="*">
          <h1>Route not Found!</h1>
        </Route>
      </Switch>
    </div>
  );
}

function App() {
  return (
    <Router>
      <header>
        <Route exact path="/">
          <Redirect to="/rgb/192/192/192" />
        </Route>
        <ul>
          <NavLink className="teal" to="/rgb/20/220/207">
            Teal
          </NavLink>
          <NavLink className="maize" to="/rgb/255/203/5">
            Maize
          </NavLink>
          <NavLink className="blue" to="/rgb/0/39/76">
            Blue
          </NavLink>
        </ul>
      </header>

      <ScreenColor />
    </Router>
  );
}

export default App;
