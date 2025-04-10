import { useState } from 'react';
import './index.css';
import axios from 'axios';
import { Sidebar } from './Component/Sidebar';
import { ChatBox } from './Component/ChatBox';

const welcomeMessage = {
  question: '',
  answer: `Hello! I'm ValBot 👋  
I'm your friendly AI assistant, here to provide accurate and helpful information about Valenzuela National High School. Whether you have questions about the school's history, programs, policies, or upcoming events, I'm here 24/7 to assist you. Just type your question, and I'll do my best to help you right away!`,
};

function App() {
  const [chats, setChats] = useState([[welcomeMessage]]);
  const [selectedChatIndex, setSelectedChatIndex] = useState(0);
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState(welcomeMessage.answer);
  const [isTyping, setIsTyping] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsTyping(true);

    try {
      const res = await axios.post('https://valnat-bot.onrender.com/ask', {
        question,
      });
      let answer = res.data.answer;

      let updatedChats = [...chats];
      if (selectedChatIndex === null) {
        updatedChats.push([{ question, answer }]);
        setSelectedChatIndex(updatedChats.length - 1);
      } else {
        updatedChats[selectedChatIndex].push({ question, answer });
      }

      setChats(updatedChats);
      setResponse(answer);
      setQuestion('');
      setIsTyping(false);
      setIsSubmitting(false);
    } catch (err) {
      setResponse('Error: ' + err.message);
      setIsTyping(false);
      setIsSubmitting(false);
    }
  };

  const handleNewChat = () => {
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
