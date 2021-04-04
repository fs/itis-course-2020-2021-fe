import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TasksPage from './components/pages/TasksPage';
import Home from './components/pages/Home';
import routes from './config/routes';

const initialList = [{ text: 'Позвтракать' }, { text: 'Не опаздать' }];

const App = () => {
  const { HOME, TASKS } = routes;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={HOME}>
          <Home />
        </Route>
        <Route exact path={TASKS}>
          <TasksPage initialList={initialList} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
