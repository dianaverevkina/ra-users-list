export const UserInfo = ({avatar, name, details}) => {

  return (
    <article className='user'>
      <div className="user__avatar">
        <img src={avatar} alt="" />
      </div>
      <p className="user__name">{name}</p>
      <ul className="user__info">
        <li className="user__detail">City: {details.city}</li>
        <li className="user__detail">Company: {details.company}</li>
        <li className="user__detail">Position: {details.position}</li>
      </ul>
    </article>
  )
}
