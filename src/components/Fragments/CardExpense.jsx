import React from 'react';
import Card from '../Elements/Card';
import Icon from '../Elements/Icon';

function CardExpense({ expense }) {
  const iconMap = {
    housing: <Icon.House />,
    food: <Icon.Food />,
    transportation: <Icon.Transport />,
    entertainment: <Icon.Movie />,
    shopping: <Icon.Shopping />,
    others: <Icon.Other />
  };

  return (
    <Card
      desc={
        <>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-special-bg2 p-3 rounded-lg text-gray-01">
                {iconMap[expense.category] || <Icon.Other />}
              </div>
              <div>
                <div className="text-gray-02 text-sm capitalize">{expense.category}</div>
                <div className="font-bold text-xl">${expense.amount}</div>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-sm font-bold flex items-center justify-end gap-1 ${expense.trend === 'up' ? 'text-red-500' : 'text-green-500'}`}>
                {expense.percentage}% {expense.trend === 'up' ? <Icon.ArrowUp /> : <Icon.ArrowDown />}
              </div>
              <div className="text-gray-03 text-xs mt-1">Compare to the last month</div>
            </div>
          </div>
          
          {/* Bagian Bawah: List Breakdown */}
          <div className="flex flex-col gap-4">
            {expense.detail.map((item, index) => (
              <div key={index}>
                <div className="border-t border-gray-05 mb-4"></div>
                <div className="flex justify-between items-center text-sm">
                  <div className="font-bold text-gray-01">{item.item}</div>
                  <div className="text-right">
                    <div className="font-bold text-gray-01">${item.amount}</div>
                    <div className="text-gray-03 text-xs mt-1">{item.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      }
    />
  );
}

export default CardExpense;
