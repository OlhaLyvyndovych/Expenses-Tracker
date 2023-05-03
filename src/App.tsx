import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpensesFilter from "./components/ExpensesFilter";
import ExpensesList from "./components/ExpensesList";
import categories from "./categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "aaa",
      amount: 10,
      category: "Groceries",
    },
    {
      id: 2,
      description: "bbb",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 3,
      description: "ccc",
      amount: 10,
      category: "Entertainment",
    },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div className="App">
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />
      <div className="mb-3">
        <ExpensesFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpensesList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
