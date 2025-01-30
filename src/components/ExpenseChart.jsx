// ExpenseChart.js
import { Pie } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

// Registering necessary chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const ExpenseChart = ({ expenses }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [
        '#8F794B',  // Champagne
        '#AD925B',  // Tan
        '#E3D0BE',  // Almond
        '#F8F1EB'   // White
      ]
    }]
  });

  // Function to process data for the chart
  const processChartData = () => {
    // Grouping expenses by category and summing amounts
    const categoryData = expenses.reduce((acc, expense) => {
      if (acc[expense.category]) {
        acc[expense.category] += expense.amount;
      } else {
        acc[expense.category] = expense.amount;
      }
      return acc;
    }, {});

    const categories = Object.keys(categoryData);
    const amounts = Object.values(categoryData);

    setChartData({
      labels: categories,
      datasets: [{
        data: amounts,
        backgroundColor: [
          '#8F794B',  // Champagne
          '#AD925B',  // Tan
          '#E3D0BE',  // Almond
          '#F8F1EB'   // White
        ]
      }]
    });
  };

  useEffect(() => {
    if (expenses.length) {
      processChartData();
    }
  }, [expenses]);

  return (
    <div className="expense-chart-container">
      <h2>Spending by Category</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default ExpenseChart;