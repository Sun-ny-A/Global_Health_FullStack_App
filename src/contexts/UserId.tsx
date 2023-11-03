// import React, { createContext, useState, useEffect } from 'react';
// import { LoggedUserId } from '../components/types';


// interface UserIdContextValues {
//   userId: LoggedUserId;
//   setUserId: (userId: LoggedUserId) => void;
// }

// export const UserIdContext = createContext({} as UserIdContextValues);

// export function UserIdProvider({ children }: { children: React.ReactNode }) {
//   const [userId, setUserId] = useState<LoggedUserId>({ id: '', token: '' });

  
//   useEffect(() => {
//     fetchUserFromBackend()
//       .then((user) => {
//         setUserId(user);
//       })
//       .catch((error) => {
//         console.error('Error fetching user:', error);
//       });
//   }, []);

//   async function fetchUserFromBackend() {
//     try {
//       const response = await fetch('http://127.0.0.1:5000/user/${user_id}', {
//         method: 'GET',
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       });

//       if (response.ok) {
//         const userId = await response.json();
//         return userId;
//       } else {
//         console.error('Error fetching user:', response.status);
//         return null;
//       }
//     } catch (error) {
//       console.error('Error fetching user:', error);
//       return null;
//     }
//   }

//   const contextValue = {
//     userId,
//     setUserId,
//   };

//   return (
//     <UserIdContext.Provider value={contextValue}>
//       {children}
//     </UserIdContext.Provider>
//   );
// }

