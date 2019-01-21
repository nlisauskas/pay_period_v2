import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="App-header">
        <h1>Welcome to your Pay Period Dashboard - your compass to financial freedom</h1>
        <h3><Link to='/' style={{ textDecoration: 'none', color: 'black'}}>View Dashboard</Link></h3>
        <h3><Link to='/income' style={{ textDecoration: 'none', color: 'black'}}>View Income</Link></h3>
        <h3><Link to='/expenses' style={{ textDecoration: 'none', color: 'black'}}>View Expenses</Link></h3>
      </div>
    </div>
  )
}

export default Header
