import React from 'react'

const Sidebar = ({ speak, setSpeak, clearChatHistory }) => {
  const handlePageReload = () => {
    window.location.reload();
  }
  const handleSpeak = () => {
    window.speechSynthesis.cancel();
    setSpeak(!speak);
  }
  return (
    <div className='flex sm:flex-col sm:border sm:rounded-3xl sm:border-gray-600 py-2 sm:py-0 sm:bg-gray-800 sm:h-full gap-0 sm:gap-0 bg-gray-900 rounded-full shadow-lg'>
      <div onClick={handlePageReload} className='cursor-pointer hover:bg-gray-700 px-5 py-3 sm:py-4 grid items-center justify-center rounded-3xl' role="button" aria-label="Reload page" title="Reload page">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#ffffff"} fill={"none"}>
          <path d="M20.5 5.5H9.5C5.78672 5.5 3 8.18503 3 12" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M3.5 18.5H14.5C18.2133 18.5 21 15.815 21 12" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M18.5 3C18.5 3 21 4.84122 21 5.50002C21 6.15882 18.5 8 18.5 8" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M5.49998 16C5.49998 16 3.00001 17.8412 3 18.5C2.99999 19.1588 5.5 21 5.5 21" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </div>
      <div role="button" aria-label="Speak" title='Toggle Speak' onClick={handleSpeak} className={`cursor-pointer hover:bg-gray-700 px-5 py-3 grid items-center justify-center sm:py-4 rounded-3xl ${speak ? 'opacity-50' : 'opacity-100'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#ffffff"} fill={"none"}>
          <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#ffffff" strokeWidth="1.5"></path>
          <path d="M12 8V16" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M9 10V14" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M6 11V13" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M15 10V14" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M18 11V13" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </div>
      <div role="button" aria-label="Clear chat history" title='Clear chat history' onClick={clearChatHistory} className={`cursor-pointer hover:bg-gray-700 px-5 py-3 grid items-center justify-center sm:py-4 rounded-3xl`}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
    <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9.5 16.5L9.5 10.5" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14.5 16.5L14.5 10.5" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
      </div>
    </div>
  )
}

export default Sidebar
