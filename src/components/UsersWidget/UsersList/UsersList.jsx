import React from 'react'

export const UsersList = ({users, onClick, selectedUserId}) => {
  return (
    <ul className='users'>
      {users.map(user => {
        const {id} = user;
        return ( 
          <li className={`user-name ${selectedUserId === id && 'user-name_active'}`} 
            key={id} 
            onClick={() => onClick(id)}
          >
            {user.name}
          </li>
        );
      })}
    </ul>
  )
}
