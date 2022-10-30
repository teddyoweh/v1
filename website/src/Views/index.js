
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
// import Messages from './Messages';
// import Groups from './Groups';
// import Calls from './Call';
// import { PageNotFound } from './errors';
export default function Views() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/messages" component={Messages} /> */}
        {/* <Route exact path="/groups" component={Groups} />
        <Route exact path="/calls" component={Calls} />
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/Resetpassword" component={ResetPassword}></Route>
        <Route exact path="/verifyemail" component={VerifyEmail}></Route>
        <Route exact path="*" component={PageNotFound}></Route> */}
      </Switch>
    </Router>
  );
}