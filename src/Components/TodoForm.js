function TodoForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input type="text" className="input" value={props.value} onChange={(e) => props.onValueChange(e.target.value)} />
    </form>
  );
}

export default TodoForm;
