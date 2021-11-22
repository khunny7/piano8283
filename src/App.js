import { Container } from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Header } from './components/header';
import { Home } from './components/home';
import { Practices } from './components/practices';
import { Practice } from './components/practices/practice';

function App() {
  return (
    <Container fluid>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" exact element={<Home />} />
            <Route path="/practices" exact element={<Practices />} />
            <Route path='/practices/:practiceId' exact element={<Practice />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
