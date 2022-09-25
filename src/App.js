import './App.css';
import {
  Link,
  Redirect,
  BrowserRouter as Router,
  useParams,
  Switch,
  Route,
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
          <Link to="/rgb/192/192/192">Silver</Link>
          <Link to="/rgb/220/20/60">Crimson</Link>
          <Link to="/rgb/147/112/219">Purple</Link>
        </ul>
      </header>

      <ScreenColor />
    </Router>
  );
}

export default App;
