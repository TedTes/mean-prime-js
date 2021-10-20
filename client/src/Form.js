export default function Form({ handleSubmit, result, error }) {
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label name="label">Please Insert Valid Number:</label>
        <input
          type="Number"
          name="number"
          data-testid="number-input"
          required
        />
        <button type="submit" data-testid="submit-btn">
          Find
        </button>
      </form>
      <label data-testid="output-panel">
        {error
          ? error
          : result.length
          ? `The median prime Number(s) = [${result}]`
          : ""}
      </label>
    </div>
  );
}
