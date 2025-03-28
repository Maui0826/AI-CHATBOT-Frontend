export function Form({ handleSubmit, question, setQuestion }) {
  return (
    <div className="form-container">
      <h1>Ask ValNat AI</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="Ask something about ValNat"
          className="input"
        />
        <button type="submit" className="button">
          Ask
        </button>
      </form>
    </div>
  );
}
