import { NewChat } from './NewChat';
import { Logo } from './Logo';

export function Sidebar({
  chats,
  handleNewChat,
  handleSelectChat,
  selectedChatIndex,
}) {
  return (
    <div className="sidebar">
      <Logo />
      <h2>VALNAT AI</h2>
      <NewChat handleNewChat={handleNewChat} />
      <div className="chat-history">
        {chats.map((chat, index) => (
          <button
            key={index}
            onClick={() => handleSelectChat(index)}
            className={index === selectedChatIndex ? 'active' : ''}
          >
            Chat {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
