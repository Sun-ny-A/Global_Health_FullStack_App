import { useState, useEffect } from 'react';
import { User } from '../components/types';
import { FaHeart, FaRegHeart } from 'react-icons/fa';


export default function Users() {
  const [users, setUsers] = useState<Array<Partial<User>>>([])
  const [showUsers, setShowUsers] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string>('')
  const [heartedUsers, setHeartedUsers] = useState<string[]>([])

  useEffect(() => {
    getUsers()
  }, [])

  async function getUsers() {
    const res = await fetch('http://127.0.0.1:5000/user')
    if (res.ok) {
      const data = await res.json()
      setUsers(data)
    } else {
      window.alert('Bad Request')
    }
  }

  function toggleHeart(user: Partial<User>) {
    if (heartedUsers.includes(user.id!)) {
      setHeartedUsers(heartedUsers.filter((id) => id !== user.id))
    } else {
      setHeartedUsers([...heartedUsers, user.id!])
    }
  }

  return (
    <div>
      <button className="show-users" onClick={() => setShowUsers(!showUsers)}>
        {showUsers ? 'Hide Users' : 'Show All Users'}
      </button>
      {showUsers && (
        <div className="show-users-div">
          {users.length > 0 && (
            <select
              className="drop-down-users"
              value={selectedUser}
              onChange={(event) => setSelectedUser(event.target.value)}
            >
              <option value="">Show All</option>
              {users.map((user: Partial<User>) => (
                <option key={user.id} value={user.id}>
                  {user.username}
                </option>
              ))}
            </select>
          )}
          {localStorage.getItem('token') && (
            <ul className="drop-down-users" style={{ listStyle: 'none', padding: 0 }}>
              {users
                .filter((user) => !selectedUser || user.id === selectedUser)
                .map((user: Partial<User>) => (
                  <li key={user.id}>
                    {user.username}{' '}
                    <button
                      onClick={() => toggleHeart(user)}
                      style={{
                        color: heartedUsers.includes(user.id!) ? 'red' : 'inherit',
                        border: 0,
                      }}
                    >
                      {heartedUsers.includes(user.id!) ? <FaHeart /> : <FaRegHeart />}
                    </button>
                  </li>
                ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}


