import { useState } from 'react';
import './index.css';
import axios from 'axios';
import { Sidebar } from './Component/Sidebar';
import { ChatBox } from './Component/ChatBox';

function App() {
  const [chats, setChats] = useState([]); // List of all chat sessions
  const [selectedChatIndex, setSelectedChatIndex] = useState(null); // Which chat you're on
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('https://valnat-bot.onrender.com/ask', {
        question,
      });
      const answer = res.data.answer;

      let updatedChats = [...chats];

      if (selectedChatIndex === null) {
        // First ever chat
        updatedChats.push([{ question, answer }]);
        setSelectedChatIndex(updatedChats.length - 1);
      } else {
        updatedChats[selectedChatIndex].push({ question, answer });
      }

      setChats(updatedChats);
      setResponse(answer);
      setQuestion('');
    } catch (err) {
      setResponse('Error: ' + err.message);
    }
  };

  const handleNewChat = () => {
    setChats(prev => [...prev, []]); // Add empty chat
    setSelectedChatIndex(chats.length); // Select new chat
    setQuestion('');
    setResponse('');
  };

  const handleSelectChat = index => {
    setSelectedChatIndex(index);
    const lastMessage = chats[index][chats[index].length - 1];
    setResponse(lastMessage ? lastMessage.answer : '');
    setQuestion('');
  };

  return (
    <div className="app">
      <Sidebar
        chats={chats}
        handleNewChat={handleNewChat}
        handleSelectChat={handleSelectChat}
        selectedChatIndex={selectedChatIndex}
      />
      <ChatBox
        chats={chats}
        selectedChatIndex={selectedChatIndex}
        handleSubmit={handleSubmit}
        question={question}
        setQuestion={setQuestion}
        response={response}
      />
    </div>
  );
}

export default App;
