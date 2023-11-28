import React, { useEffect, useState } from 'react'
import { UsersList } from './UsersList/UsersList'
import { UserInfoLoading } from './UserInfoLoading/UserInfoLoading';

export const UsersWidget = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUser] = useState();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(process.env.REACT_APP_USERS_API_URL)
      .then(response => response.json())
      .then(result => setUsers(result))
  }, [])

  useEffect(() => {
    if (!selectedUserId) return;
    const fetchData = async () => {
      setUserInfo({loading: true});
      const response = await fetch(`${process.env.REACT_APP_USER_API_URL}${selectedUserId}.json`);
      const data = await response.json();
      setUserInfo({...data, loading: false});
    }
    fetchData();
  }, [selectedUserId])

  function handleClick (id) {
    setSelectedUser(id);
  }

  return (
    <div className='widget'>
      <UsersList users={users} selectedUserId={selectedUserId} onClick={handleClick}/>
      <UserInfoLoading info={userInfo} />
    </div>
  )
}
