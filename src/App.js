import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import RQSuperHeroes from './components/RQSuperHeroes';
import SuperHeroes from './components/SuperHeroes';
import { QueryClientProvider, QueryClient } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/super-heroes" element={<SuperHeroes />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initalIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  );
}

export default App;
