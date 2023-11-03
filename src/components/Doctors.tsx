import { useState, useEffect } from 'react';
import { Doctor } from './types';
import { FaHeart, FaRegHeart } from 'react-icons/fa';


export default function Users() {
  const [doctors, setDoctors] = useState<Array<Partial<Doctor>>>([])
  const [showDoctors, setShowDoctors] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<string>('')
  const [heartedDoctors, setHeartedDoctors] = useState<string[]>([])

  useEffect(() => {
    getDoctors()
  }, [])

  async function getDoctors() {
    const res = await fetch('http://127.0.0.1:5000/doctor')
    if (res.ok) {
      const data = await res.json()
      setDoctors(data)
    } else {
      window.alert('Bad Request')
    }
  }

  function toggleHeart(doctor: Partial<Doctor>) {
    if (heartedDoctors.includes(doctor.id!)) {
      setHeartedDoctors(heartedDoctors.filter((id) => id !== doctor.id))
    } else {
      setHeartedDoctors([...heartedDoctors, doctor.id!])
    }
  }

  return (
    <div>
      <button className="show-doctors" onClick={() => setShowDoctors(!showDoctors)}>
        {showDoctors ? 'Hide Doctors' : 'Show All Doctors'}
      </button>
      {showDoctors && (
        <div className="show-doctors-div">
          {doctors.length > 0 && (
            <select
              className="drop-down-users"
              value={selectedDoctor}
              onChange={(event) => setSelectedDoctor(event.target.value)}
            >
              <option value="">Show All</option>
              {doctors.map((doctor: Partial<Doctor>) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.doctor_name}
                </option>
              ))}
            </select>
          )}
          {localStorage.getItem('token') && (
            <ul className="drop-down-users" style={{ listStyle: 'none', padding: 0 }}>
              {doctors
                .filter((doctor) => !selectedDoctor || doctor.id === selectedDoctor)
                .map((doctor: Partial<Doctor>) => (
                  <li key={doctor.id}>
                    {doctor.doctor_name}{' '}
                    <button
                      onClick={() => toggleHeart(doctor)}
                      style={{
                        color: heartedDoctors.includes(doctor.id!) ? 'red' : 'inherit',
                        border: 0,
                      }}
                    >
                      {heartedDoctors.includes(doctor.id!) ? <FaHeart /> : <FaRegHeart />}
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