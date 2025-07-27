import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import MainPanel from './components/MainPanel'
import Chat from './components/Chat'
import { useState } from 'react'

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [speak, setSpeak] = useState(false);
  return (
    <div className='sm:flex sm:gap-2 px-3 py-2'>
      <div className='sm:w-[4%]'>
        <Sidebar speak={speak} setSpeak={setSpeak} chatHistory={chatHistory} setChatHistory={setChatHistory}/>
      </div>
      <div className='sm:flex sm:gap-2 sm:w-[95%] justify-between'>
        <MainPanel speak={speak} chatHistory={chatHistory} setChatHistory={setChatHistory}/>
        <Chat speak={speak} chatHistory={chatHistory} setChatHistory={setChatHistory}/>
      </div>
    </div>
  )
}

export default App
