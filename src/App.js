import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client/react';
import TasksPage from './components/pages/TasksPage';
import Home from './components/pages/Home';
import routes from './config/routes';
import TaskPage from './components/pages/TaskPage';
import apolloClient from './lib/apolloClient';
import TasksPageWithGraphQL from './components/pages/TasksPageWithGraphQL';

const App = () => {
  const { HOME, TASKS, TASKS_WITH_GRAPHQL, TASK } = routes;

  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Switch>
          <Route exact path={HOME}>
            <Home />
          </Route>
          <Route exact path={TASKS}>
            <TasksPage />
          </Route>
          <Route exact path={TASKS_WITH_GRAPHQL}>
            <TasksPageWithGraphQL />
          </Route>
          <Route path={TASK}>
            <TaskPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
