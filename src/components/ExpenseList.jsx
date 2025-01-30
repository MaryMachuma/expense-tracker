function ExpenseList({ expenses, deleteExpense }) {
    return (
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.title} - ${expense.amount} ({expense.category}) on {expense.date}
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default ExpenseList;
  