import React from 'react';

const Expense = () => {
    return (
        <div>
  <h2 className="border-b pb-2 font-medium text-red-600">Expense</h2>
  {/* <p class="py-2.5 text-gray-600">There are no expenses.</p> */}
  <ul id="expense-list" className="divide-y">
    <li className="py-2.5">
      <div className="group flex justify-between gap-2 text-sm">
        <span>Groceries 1</span>
        <div>
          <span className="text-red-600">-2,500.00</span>
          <span className="delete-expense ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block">
            Delete
          </span>
        </div>
      </div>
    </li>
    <li className="py-2.5">
      <div className="group flex justify-between gap-2 text-sm">
        <span>Electricity Bill</span>
        <div>
          <span className="text-red-600">-2,500.00</span>
          <span className="delete-expense ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block">
            Delete
          </span>
        </div>
      </div>
    </li>
    <li className="py-2.5">
      <div className="group flex justify-between gap-2 text-sm">
        <span>House rent</span>
        <div>
          <span className="text-red-600">-2,500.00</span>
          <span className="delete-expense ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block">
            Delete
          </span>
        </div>
      </div>
    </li>
    <li className="py-2.5">
      <div className="group flex justify-between gap-2 text-sm">
        <span>Phone bill</span>
        <div>
          <span className="text-red-600">-2,500.00</span>
          <span className="delete-expense ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block">
            Delete
          </span>
        </div>
      </div>
    </li>
    <li className="py-2.5">
      <div className="group flex justify-between gap-2 text-sm">
        <span>1 Week Travel</span>
        <div>
          <span className="text-red-600">-2,500.00</span>
          <span className="delete-expense ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block">
            Delete
          </span>
        </div>
      </div>
    </li>
  </ul>
</div>

    );
};

export default Expense;