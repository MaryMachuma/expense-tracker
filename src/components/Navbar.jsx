import React from "react";
import { Link } from "react-router-dom";

function Navbar () {
    return (
        <div className="navbar">
            <div className="expenses">
                <Link to="/expenses">Expenses</Link>
            </div>
            <div className="add-expense">
                <Link to="/add-expenses">Add Expense</Link>
            </div>
            <div className="charts">
                <Link to="/charts">Charts</Link>
            </div>
        </div>
    )
}

export default Navbar;