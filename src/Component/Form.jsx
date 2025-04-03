export function Form({ handleSubmit, question, setQuestion, isTyping }) {
  return (
    <div className="form-container">
      <h1>{isTyping ? 'Please Wait...' : 'Ask ValBot'}</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={isTyping ? '' : question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="Ask something about ValNat"
          className="input"
        />
        <button type="submit" className="button">
          {isTyping ? '🛑' : 'Ask'}
        </button>
      </form>
    </div>
  );
}
