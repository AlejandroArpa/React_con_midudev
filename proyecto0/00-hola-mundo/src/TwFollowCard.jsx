import React from 'react'
import './App.css'
import { useState } from 'react'

function TwFollowCard({formatUserName, userName, name}) {
  const [isFollowing,setIsFollowing] = useState(false)

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  const text = isFollowing ? 'siguiendo' : 'seguir'
  const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
          className='tw-followCard-avatar'
          alt="Avatar" 
          src={`https://unavatar.io/${userName}`} />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='btnText'>{text}</span>
          <span className='stopFollow'> dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}

export default TwFollowCard