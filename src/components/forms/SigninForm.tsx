import { useRef, FormEvent, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { User } from '../../types';
import { UserContext } from '../../contexts/UserProvider';

export default function SigninForm() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const usernameField = useRef<HTMLInputElement>(null);
  const emailField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/landing');
    }
  }, [navigate]);

  async function handleLoginData(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    const loginInfo: Partial<User> = {
      password: passwordField.current!.value,
    };

    if (usernameField.current?.value) {
      loginInfo.username = usernameField.current.value;
    } else if (emailField.current?.value) {
      loginInfo.email = emailField.current.value;
    } else {
      window.alert('Please include Username or Email');
      return;
    }

    clearForm();
    const loggedIn = await loginUser(loginInfo);

    if (loggedIn) {
      navigate('/landing');
    }
  }

  async function loginUser(loginInfo: Partial<User>): Promise<boolean> {
    try {
      const res = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginInfo),
      });

      if (res.ok) {
        const data = await res.json();
        const accessToken = data.access_token;
        setUser({
          token: accessToken,
          username: loginInfo.username ? loginInfo.username : '',
        });
        localStorage.setItem('token', accessToken);
        return true;
      } else {
        window.alert('Failed Login');
        return false;
      }
    } catch (error) {
      console.error('Error during login:', error);
      return false;
    }
  }

  function clearForm() {
    usernameField.current!.value = '';
    emailField.current!.value = '';
    passwordField.current!.value = '';
  }

  return (
    <form className="Form" onSubmit={handleLoginData}>
      <label htmlFor="username">Username</label><br />
      <input className="input-field" type="text" name='username' ref={usernameField} /><br />
      <label htmlFor="email">Email</label><br />
      <input className="input-field" type="text" name='email' ref={emailField} /><br />
      <label htmlFor="password">Password</label><br />
      <input className="input-field" type="password" name='password' ref={passwordField} required /><br />
      <input className="Register-Button" type="submit" value='Sign In' />
    </form>
  )
}