import { Logo } from './Logo';
import { NewChat } from './NewChat';
import { useState } from 'react';

export function Sidebar({
  chats,
  handleNewChat,
  handleSelectChat,
  selectedChatIndex,
}) {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(prev => !prev);
  };

  return (
    <>
      {isSidebarVisible ? (
        <div className={`sidebar ${!isSidebarVisible ? 'visible' : ''}`}>
          <button className="burger-icon" onClick={toggleSidebar}>
            Minimize
          </button>
          <Logo />
          <h2>VALBOT</h2>
          <NewChat handleNewChat={handleNewChat} />

          <div className="chat-history">
            {chats.map((chat, index) => (
              <button
                key={index}
                onClick={() => handleSelectChat(index)}
                className={index === selectedChatIndex ? 'active' : ''}
              >
                New Chat {index + 1}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="burger">
          <button className="burger-icon" onClick={toggleSidebar}>
            &#9776;
          </button>
        </div>
      )}
    </>
  );
}
