import axios from 'axios';
import React from 'react'
import { useRef } from 'react';
import remarkGfm from 'remark-gfm'
import Markdown from 'react-markdown'
import { useEffect } from 'react';
import { useState } from 'react';
import { ShineBorder } from './magicui/shine-border';

const TypingLoader = () => (
  <span className="inline-flex gap-1 items-center">
    Typing
    <span className="animate-bounce">.</span>
    <span className="animate-bounce delay-300">.</span>
    <span className="animate-bounce delay-600">.</span>
  </span>
);

const Chat = ({ chatHistory, setChatHistory }) => {
  const [showChat, setShowChat] = useState(window.innerWidth >= 640);
  const [chatLoading, setChatLoading] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setShowChat(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [chatInput, setChatInput] = useState("");
  const handleChatInputChange = (event) => {
    setChatInput(event.target.value);
  }
  const handleShowChat = () => {
    setShowChat(!showChat);
  }
  const handleSendMessage = async (input) => {
    const trimmedInput = (input ?? chatInput).trim();
    if (!trimmedInput) return;

    // Extract summary from chatHistory
    const summaryObj = chatHistory.find(msg => msg.summary);
    const summaryText = summaryObj?.summary || "";

    const updatedHistory = [...chatHistory, { user: trimmedInput }];
    setChatHistory(updatedHistory);
    setChatInput("");

    try {
      setChatLoading(true);
      // Show "Typing..." message while waiting for response
      setChatHistory([...updatedHistory, { ai: "typing-loader", temp: true }]);
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/chat`, {
        history: updatedHistory,
        question: `Prescription Summary:\n${summaryText}\n\nUser Query: ${trimmedInput}`
      });
      // Remove the temporary "Typing..." message before adding the real response
      setChatHistory(prev =>
        prev
          .filter(msg => !msg.temp)
          .concat({ ai: response.data.answer || response.data.response || response })
      );
      const ans = response.data.answer || response.data.response || response;
      setChatHistory([...updatedHistory, { ai: ans }]);
    } catch (error) {
      console.error('Error in chat:', error);
      setChatHistory([...updatedHistory, { ai: "Error: Please try again." }]);
    }
    finally {
      setChatLoading(false);
    }
  };

  // Ref for chat container
  const chatContainerRef = useRef(null);

  // Scroll to bottom when chatHistory changes
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, showChat]);

  // Determine which empty state message to show
  const showUploadMsg = !chatHistory.some((msg) => msg.summary);
  const showStartMsg = !showUploadMsg && !chatHistory.some((msg) => msg.user);

  return (
    <div className="fixed bottom-0 right-0 w-full rounded-t-3xl sm:rounded-3xl sm:py-3 sm:px-3 md:px-4 bg-gray-900 sm:bg-gray-800 shadow-2xl sm:static sm:w-[40%] md:w-[30%] sm:shadow-none sm:border sm:border-gray-600">
      <div className="w-full p-4 cursor-pointer" onClick={handleShowChat}>
        Chat
        <span className="float-right text-white px-1 sm:hidden">
          {showChat ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color='#fff' fill="none">
              <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" color='#fff' height="24" fill="none">
              <path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all sm:h-full duration-300 ease-in-out ${showChat ? "max-h-[500px] sm:max-h-[87vh] sm:h-full opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="py-4 px-2 relative">
          <div className="h-64 overflow-y-auto mb-4 sm:min-h-[72vh]" ref={chatContainerRef}>
            <div className="relative z-10 p-4 rounded-lg">
              {chatHistory.map((message, index) => (
                <div key={index} className="mb-2">
                  {message.user && <div className='text-right w-full grid justify-items-end justify-end'><p className="bg-gray-700 w-fit rounded-lg px-4 py-3">{message.user}</p></div>}
                  {message.ai && (
                    <div className='bg-blue-600/50 bg-o px-4 py-3 rounded-lg max-w-[80%]'>
                      {message.ai === "typing-loader" ? (
                        <TypingLoader />
                      ) : (
                        <Markdown remarkPlugins={[remarkGfm]}>{message.ai}</Markdown>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {showUploadMsg && (
            <div className="text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-800 sm:bg-gray-900 text-zinc-500 w-[90%] block rounded-lg px-5 py-3 sm:px-6 sm:py-5">
              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
              <p className="text-lg font-semibold text-zinc-200">MedTalk Chat Features</p>

              <ul className="text-sm mt-1 text-left max-w-md mx-auto list-disc list-inside text-zinc-400 space-y-1">
                <li><span className="text-zinc-300 font-medium">Real Time Q&A:</span> Ask health queries and get instant, AI-powered responses.</li>
                <li><span className="text-zinc-300 font-medium">Contextual Chat:</span> Stay within your diagnosis context while chatting for clarity.</li>
                <li><span className="text-zinc-300 font-medium">Privacy First Design:</span> Local rendering ensures sensitive data stays yours.</li>
              </ul>
            </div>
          )}
          {showStartMsg && (
            <small className="text-center text-[15px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-zinc-500 w-full block">Start a conversation</small>
          )}
          {/* Quick Questions */}
          {
            chatHistory.some((msg) => msg.summary) && (
              <div className="mb-2 flex gap-2 overflow-x-auto no-scrollbar">
                {[
                  "What is this medicine for?",
                  "Are there any side effects?",
                  "How should I take these medicines?",
                  "Can I take these with food?",
                  "What should I avoid while on this prescription?"
                ].map((q, i) => (
                  <button
                    key={i}
                    type="button"
                    className="bg-gray-700 text-white text-nowrap cursor-pointer px-3 py-1 rounded-full text-xs sm:text-sm md:text-md hover:bg-blue-800 transition"
                    onClick={() => handleSendMessage(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )
          }
          {/* End Quick Questions */}
          <div className="flex items-center gap-2 mt-2">
            <input
              autoComplete="off"
              onChange={handleChatInputChange}
              value={chatInput}
              className="w-4/5 bg-gray-800 border border-zinc-600 px-4 py-2 outline-none rounded-3xl"
              type="text"
              name="chatInput"
              placeholder="Enter your query"
            />
            <button
              disabled={!chatHistory.some((msg) => msg.summary)}
              onClick={() => handleSendMessage()}
              className={`bg-blue-600 cursor-pointer disabled:cursor-not-allowed disabled:opacity-65 w-1/5 text-white px-4 py-2 rounded-3xl ${chatLoading ? 'animate-pulse' : ''}`}
            >
              Ask
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
