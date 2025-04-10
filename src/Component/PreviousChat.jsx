import ReactMarkdown from 'react-markdown';

export function PreviousChat({ history, isTyping }) {
  const initialGreeting = `
**Hello! I'm ValBot 👋**

I'm your friendly AI assistant, here to provide accurate and helpful information about **Valenzuela National High School**. Whether you have questions about the school's history, programs, policies, or upcoming events, I'm here 24/7 to assist you. Just type your question, and I'll do my best to help you right away!
`;

  return (
    <div className="previous-chat">
      <h3>Chat with ValBot</h3>

      {!history || history.length === 0 ? (
        <div className="box">
          <div className="response">
            <strong>ValBot:</strong>{' '}
            <ReactMarkdown>{initialGreeting}</ReactMarkdown>
          </div>
        </div>
      ) : (
        history.map((chat, index) => (
          <div className="box" key={index}>
            {chat.question && (
              <div className="question">
                <strong>You:</strong>{' '}
                <ReactMarkdown>{chat.question}</ReactMarkdown>
              </div>
            )}
            <div className="response">
              <strong>ValBot:</strong>{' '}
              <ReactMarkdown>{chat.answer}</ReactMarkdown>
            </div>
          </div>
        ))
      )}

      {isTyping && (
        <div className="typing">
          <p>ValBot is typing...</p>
        </div>
      )}
    </div>
  );
}
