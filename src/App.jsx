import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import Navbar from "./Navbar";
import './App.css'

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/expenses")
      .then((res) => res.json())
      .then((data) => setExpenses(data));
  }, []);

  const addExpense = (newExpense) => {
    fetch("http://localhost:3001/expenses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newExpense),
    })
      .then((res) => res.json())
      .then((data) => setExpenses([...expenses, data]));
  };

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/expenses" element={<ExpenseList expenses={expenses} />} />
          <Route path="/add-expense" element={<ExpenseForm addExpense={addExpense} />} />
          <Route path="/charts" element={<ExpenseChart expenses={expenses} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
