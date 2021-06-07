import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Login} />
        {/* <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route component={PageNotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
