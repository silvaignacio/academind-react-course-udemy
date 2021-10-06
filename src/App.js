import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Expense One", ammount: 250, date: "25/10/2021" },
    { title: "Expense Twoº", ammount: 250, date: "25/10/2021" },
    { title: "Expense Three", ammount: 250, date: "25/10/2021" },
  ];
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        ammount={expenses[0].ammount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        ammount={expenses[1].ammount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        ammount={expenses[2].ammount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
