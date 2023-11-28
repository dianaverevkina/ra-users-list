import React from 'react'
import { UserInfo } from './UserInfo/UserInfo';

export const UserInfoLoading = ({info}) => {
  if (!info) return null;

  return (
    info.loading ?
      <div className='loading'>
        <img src="/images/Spinner.gif" alt="" />
      </div> 
      :
      <UserInfo {...info} />
  )
}
