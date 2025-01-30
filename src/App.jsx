//App.jsx
import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter import
import Navbar from './components/Navbar';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';
// import Summary from './components/Summary';

const App = () => {
  const [expenses, setExpenses] = useState([]); // Add expenses state

  useEffect(() => {
    fetch("http://localhost:3001/expenses")
      .then((res) => res.json())
      .then((data) => setExpenses(data))
      .catch((err) => console.error("Error fetching expenses:", err));
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/expenses" element={<ExpenseList />} />
        <Route path="/add-expense" element={<ExpenseForm />} />
        <Route path="/charts" element={<ExpenseChart />} />
        {/* <Route path="/summary" element={<Summary />} /> */}
        <Route path="/" element={<ExpenseList expenses={expenses} setExpenses={setExpenses} />} /> {/* Default route */}
      </Routes>
    </div>
  );
};

export default App;