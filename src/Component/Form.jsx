export function Form({ handleSubmit, question, setQuestion, isTyping }) {
  const isInputDisabled = isTyping;

  return (
    <div className="form-container">
      <h1>{isTyping ? 'Please wait...' : 'Ask ValBot'}</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={isInputDisabled ? '' : question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="Ask something about ValNat"
          className="input"
          disabled={isInputDisabled}
        />

        <button
          type="submit"
          className="button"
          disabled={isTyping || question.trim() === ''}
        >
          {isTyping ? '🛑' : 'Ask'}
        </button>
      </form>
    </div>
  );
}
