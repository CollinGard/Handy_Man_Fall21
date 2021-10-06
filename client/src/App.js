import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Workers from './components/workers/Workers';
//import Comments from './components/comments/Comments';
import Services from './components/services/Services';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';

const App = () => (
  <>
    <MainNavbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/workers" component={Workers} />
      <Route exact path="/services" component={Services} />
      <Route component={Nomatch} />
    </Switch>
  </>
)

export default App;


