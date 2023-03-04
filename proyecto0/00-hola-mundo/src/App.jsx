import React from 'react'
import './App.css'
import TwFollowCard from './TwFollowCard'

function App() {
  const formatUserName = (userName) => `@${userName}`

  return (
    <div className='App'>
      <TwFollowCard formatUserName={formatUserName} isFollowing={true} userName="Alejandro" name="Alejandro Ramírez P"/>
      <TwFollowCard formatUserName={formatUserName} isFollowing={false} userName="pheralb" name="Pablo Hernandez"/>
    </div>
  )
}

export default App