import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
      navigate('/content')
    }

  return (
    <div className='signin-container'>
      <div>
        <h1 className='text-2xl font-bold py-2'>Welcome, sign in to get started!</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='label'>Email Address</label>
          <input className="input-field" onChange={(e) => setEmail(e.target.value)} type='email' />
        </div>
        <div>
          <label className='label'>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} className='input-field' type='password' />
        </div>
        <button className='button'>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;