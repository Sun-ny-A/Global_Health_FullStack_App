import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

//import Sidebar from "./components/Sidebar";
import ToggleColorMode from "./theme/theme";
import Signin from "./components/forms/SigninForm";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import RegisterForm from './components/forms/RegisterForm';


function App(): JSX.Element {
  //const [count, setCount] = useState(0)

  return (
    /*<ToggleColorMode>*/
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/signin' element={<FormPage><Signin /></FormPage>} />
            <Route path='/register' element={<FormPage><RegisterForm /></FormPage>}/>
            <Route path='*' element={<Navigate to='/home' />} />
          </Routes>
        </BrowserRouter>
      </Container>
    /*</ToggleColorMode>*/
  )
}

export default App
