import { FormEvent, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function DeleteForm() {
  const navigate = useNavigate()

  const usernameField = useRef<HTMLInputElement>(null)
  const passwordField = useRef<HTMLInputElement>(null)

  async function handleDeleteData(e:FormEvent<HTMLElement>){
    e.preventDefault()
    
    const res = await fetch('http://127.0.0.1:5000/user',{
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')!}`
      },
      body:JSON.stringify({
        username: usernameField.current!.value,
        password: passwordField.current!.value
      })
    })
    if(res.ok){
      console.log('good response')
      const data = await res.json()
      console.log(data)
      navigate('/logout')
    } else window.alert('Delete Failed')
    console.log('bad response')
  }

  return (
    <form className="Form" onSubmit={handleDeleteData}>
      <label htmlFor="username">Username</label><br/>
      <input className="input-field" type="text" name='username' ref={usernameField} required/><br/>
      <label htmlFor="password">Password</label><br/>
      <input className="input-field" type="password" name='password' ref={passwordField} required/><br/>
      <input className="Register-Button" type="submit" value='Delete' />
    </form>
  )
}