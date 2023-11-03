import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import UserPage from "./pages/UserPage";
import ChatPage from './pages/ChatPage';
import ProviderPage from './pages/ProviderPage';
import UserForm from './components/forms/UserForm';
import SigninForm from './components/forms/SigninForm';
import DeleteForm from './components/forms/DeleteForm';
import Logout from './components/Logout';
import UserProvider from './contexts/UserProvider';


function App(): JSX.Element {

  return (
      <Container className="page-container">
        <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/signin' element={<FormPage><SigninForm /></FormPage>} />
            <Route path='/register' element={<FormPage><UserForm edit={false}/></FormPage>}/>
            <Route path='/edit' element={<FormPage><UserForm edit/></FormPage>}/>
            <Route path='/delete' element={<FormPage><DeleteForm /></FormPage>} />
            <Route path='/landing' element={<UserPage />} />
            <Route path='/provider' element={<ProviderPage />} />
            <Route path='/chat' element={<ChatPage />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='*' element={<Navigate to='/home' />} />
          </Routes>
          </UserProvider>
        </BrowserRouter>
      </Container>
  )
}

export default App
