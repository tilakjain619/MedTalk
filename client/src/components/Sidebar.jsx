import React from 'react'

const Sidebar = ({ speak, setSpeak }) => {
  const handlePageReload = () => {
    window.location.reload();
  }
  const handleSpeak = () => {
    window.speechSynthesis.cancel();
    setSpeak(!speak);
  }
  return (
    <div className='flex sm:flex-col sm:border sm:rounded-3xl sm:border-gray-600 py-2 sm:py-0 sm:bg-gray-800 sm:h-full gap-0 sm:gap-0 bg-gray-900 rounded-full shadow-lg'>
      <div onClick={handlePageReload} className='cursor-pointer hover:bg-gray-700 px-5 py-3 sm:py-4 grid items-center justify-center rounded-3xl'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#ffffff"} fill={"none"}>
          <path d="M20.5 5.5H9.5C5.78672 5.5 3 8.18503 3 12" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M3.5 18.5H14.5C18.2133 18.5 21 15.815 21 12" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M18.5 3C18.5 3 21 4.84122 21 5.50002C21 6.15882 18.5 8 18.5 8" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M5.49998 16C5.49998 16 3.00001 17.8412 3 18.5C2.99999 19.1588 5.5 21 5.5 21" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </div>
      <div onClick={handleSpeak} className={`cursor-pointer hover:bg-gray-700 px-5 py-3 grid items-center justify-center sm:py-4 rounded-3xl ${speak ? 'opacity-50' : 'opacity-100'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#ffffff"} fill={"none"}>
          <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#ffffff" strokeWidth="1.5"></path>
          <path d="M12 8V16" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M9 10V14" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M6 11V13" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M15 10V14" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M18 11V13" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </div>
    </div>
  )
}

export default Sidebar
