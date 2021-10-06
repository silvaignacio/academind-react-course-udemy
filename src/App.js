import "./App.css";
import ExpenseItem from "./components/expenses/ExpenseItem";
import Card from "./components/Card";
import ExpenseForm from "./components/expenses/ExpenseForm";
import NewExpense from "./components/expenses/NewExpense";

function App() {
  const expenses = [
    { title: "Expense One", ammount: 250, date: new Date(2021, 1, 1) },
    { title: "Expense Twoº", ammount: 250, date: new Date(2021, 1, 1) },
    { title: "Expense Three", ammount: 250, date: new Date(2021, 1, 1) },
  ];
  return (
    <div>
      <NewExpense />
      <ExpenseItem
        title={expenses[0].title}
        ammount={expenses[0].ammount}
        date={expenses[0].date}
      />
    </div>
  );
}

export default App;
