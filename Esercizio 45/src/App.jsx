import { Router, Route} from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";
import GitHubUser from "./GitHubUser";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/users/:username">
          <GitHubUser/>
          <ShowGithubUser />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
