export function NewChat({ handleNewChat }) {
  return (
    <button className="new-chat" onClick={handleNewChat}>
      + New Chat
    </button>
  );
}
