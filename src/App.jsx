import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";
import Navbar from "./components/Navbar";
import './App.css'



const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await fetch("http://localhost:3001/expenses");
        const data = await response.json();
        setExpenses(data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };
    fetchExpenses();
  }, []);

  const addExpense = async (newExpense) => {
    try {
      const response = await fetch("http://localhost:3001/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newExpense),
      });
      const data = await response.json();
      setExpenses((prevExpenses) => [...prevExpenses, data]);
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  return (
    <Router>
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
