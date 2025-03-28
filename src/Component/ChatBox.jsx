import { Form } from './Form';
import { PreviousChat } from './PreviousChat';

export function ChatBox({
  chats,
  selectedChatIndex,
  handleSubmit,
  question,
  setQuestion,
}) {
  return (
    <div className="main">
      {selectedChatIndex !== null && (
        <PreviousChat history={chats[selectedChatIndex]} />
      )}
      <Form
        handleSubmit={handleSubmit}
        question={question}
        setQuestion={setQuestion}
      />
    </div>
  );
}
