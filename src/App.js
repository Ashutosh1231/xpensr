import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import AddExpense from "./pages/add-expense";
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/add-expense'  element={<AddExpense/>} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
