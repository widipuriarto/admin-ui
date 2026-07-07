import React, { useEffect, useState, useContext } from 'react';
import MainLayout from '../components/Layouts/MainLayout';
import CardExpense from '../components/Fragments/CardExpense';
import { expensesService } from '../service/dataService';
import { AuthContext } from '../context/authContext';
import CircularProgress from '@mui/material/CircularProgress';

function ExpensesPage() {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await expensesService();
        setExpenses(data);
      } catch (error) {
        if (error.status === 401) {
          logout(); // Jika token kedaluwarsa, paksa logout
        }
      } finally {
        setIsLoading(false); // Setelah selesai mengambil API, matikan loader
      }
    };
    fetchExpenses();
  }, [logout]);

  return (
    <MainLayout>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-01">Expenses Comparison</h2>
      </div>
      
      {/* Menampilkan Loader jika data masih di-fetch */}
      {isLoading ? (
        <div className="flex flex-col justify-center items-center h-64 text-primary">
          <CircularProgress color="inherit" size={50} />
          <div className="mt-4 font-bold">Loading Data...</div>
        </div>
      ) : (
        /* Menampilkan Grid berisi 3 kolom saat data sudah siap */
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expenses.map((expense) => (
            <CardExpense key={expense.category} expense={expense} />
          ))}
        </div>
      )}
    </MainLayout>
  );
}

export default ExpensesPage;
