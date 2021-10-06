import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.ammount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
