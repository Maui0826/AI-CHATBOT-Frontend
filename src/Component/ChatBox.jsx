import { Form } from './Form';
import { PreviousChat } from './PreviousChat';

export function ChatBox({
  chats,
  selectedChatIndex,
  handleSubmit,
  question,
  setQuestion,
  isTyping,
}) {
  return (
    <div className="main">
      {selectedChatIndex !== null && (
        <PreviousChat history={chats[selectedChatIndex]} isTyping={isTyping} />
      )}
      <Form
        handleSubmit={handleSubmit}
        question={question}
        setQuestion={setQuestion}
        isTyping={isTyping}
      />
    </div>
  );
}
