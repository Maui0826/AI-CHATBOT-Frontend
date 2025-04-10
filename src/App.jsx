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
  const [isTyping, setIsTyping] = useState(false); // Track typing state
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submit state

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true); // Set to true when submitting
    setIsTyping(true); // Show typing state

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
      setIsTyping(false); // Hide typing state once response is ready
      setIsSubmitting(false); // Reset submitting state
    } catch (err) {
      setResponse('Error: ' + err.message);
      setIsTyping(false); // Hide typing state on error
      setIsSubmitting(false); // Reset submitting state
    }
  };

  const handleNewChat = () => {
    const welcomeMessage = {
      question: '',
      answer: 'Hi! How can I help you today?',
    };
    setChats(prev => [...prev, [welcomeMessage]]);
    setSelectedChatIndex(chats.length);
    setQuestion('');
    setResponse(welcomeMessage.answer);
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
        isTyping={isTyping}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}

export default App;
