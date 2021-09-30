import { Route, Switch } from 'react-router-dom';
import Home from './Components/shared/Home';
import About from './Components/shared/About';
import Workers from './Components/workers/Worker';
//import Comments from './components/comments/Comments';
//import Services from './components/services/Services';
import Nomatch from './Components/shared/Nomatch';
import MainNavbar from './Components/shared/MainNavbar';

const App = () => (
  <>
    <MainNavbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/workers" component={Workers} />
      <Route component={Nomatch} />
    </Switch>
  </>
)

export default App;


