import ReactMarkdown from 'react-markdown';

export function PreviousChat({ history }) {
  return (
    <div className="previous-chat">
      <h3>Previous Chat</h3>
      {history.map((chat, index) => (
        <div className="box" key={index}>
          <div className="question">
            <strong></strong> <ReactMarkdown>{chat.question}</ReactMarkdown>
          </div>
          <div className="response">
            <strong></strong> <ReactMarkdown>{chat.answer}</ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  );
}
