import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value="Ingresa" />
      </div>
    </form>
  );
};
export default ExpenseForm;
