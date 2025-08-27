import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import MainPanel from '../components/MainPanel'
import Chat from '../components/Chat'

const Home = () => {
  // Load from localStorage on app start
  const [chatHistory, setChatHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('medtalk-chat-history');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Error loading chat history:', error);
      return [];
    }
  });

  const [speak, setSpeak] = useState(() => {
    try {
      const saved = localStorage.getItem('medtalk-speak-setting');
      return saved ? JSON.parse(saved) : false;
    } catch (error) {
      console.error('Error loading speak setting:', error);
      return false;
    }
  });

  // Save to localStorage whenever chatHistory changes
  useEffect(() => {
    try {
      localStorage.setItem('medtalk-chat-history', JSON.stringify(chatHistory));
    } catch (error) {
      console.error('Error saving chat history:', error);
    }
  }, [chatHistory]);

  // Save to localStorage whenever speak setting changes
  useEffect(() => {
    try {
      localStorage.setItem('medtalk-speak-setting', JSON.stringify(speak));
    } catch (error) {
      console.error('Error saving speak setting:', error);
    }
  }, [speak]);

  const clearChatHistory = () => {
    setChatHistory([]);
    localStorage.removeItem('medtalk-chat-history');
  };

  return (
    <div className='sm:flex sm:gap-2 px-3 py-2'>
      <div className='sm:w-[9%] md:w-[4%]'>
        <Sidebar 
          speak={speak} 
          setSpeak={setSpeak} 
          chatHistory={chatHistory} 
          setChatHistory={setChatHistory}
          clearChatHistory={clearChatHistory}
        />
      </div>
      <div className='sm:flex sm:gap-2 sm:w-[90%] md:w-[95%] justify-between'>
        <MainPanel speak={speak} chatHistory={chatHistory} setChatHistory={setChatHistory}/>
        <Chat chatHistory={chatHistory} setChatHistory={setChatHistory}/>
      </div>
    </div>
  )
}

export default Home