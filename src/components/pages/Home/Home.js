import {Link} from 'react-router-dom';
import routes from '../../../config/routes';

const Home = () => (
  <div>
    <p>
      <a href={routes.TASKS}>Go to tasks</a>
    </p>

    <Link to='/tasks'>See tasks</Link>
  </div>
);

export default Home;
