import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Heading from "./components/Heading";
//import Sidebar from "./components/Sidebar";
import ToggleColorMode from "./theme/theme";
import Signin from "./components/forms/Signin";
import HomePage from "./pages/HomePage";

function App(): JSX.Element {
  //const [count, setCount] = useState(0)

  return (
    <ToggleColorMode>
      <Container>
        <BrowserRouter>
        <Heading variant="default"/>
          <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='*' element={<Navigate to='/home' />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ToggleColorMode>
  )
}

export default App
