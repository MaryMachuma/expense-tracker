//main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./index.css";
import "./Styles/ExpenseChart.css";
import "./Styles/ExpenseForm.css";
import "./Styles/ExpenseList.css";
import "./Styles/FilterPanel.css";
import "./Styles/Navbar.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
