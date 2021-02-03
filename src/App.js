
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import a from "./pages/a";

function App() {
  return (
    <BrowserRouter>
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossOrigin="anonymous"
        />
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/a' component={a}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
