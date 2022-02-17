import { useState } from 'react';
import { createIncome } from '../../utility/incomeService';

let income = 0;
let additionalIncome = 0;

const IncomeForm = (props) => {
  const [formData, setFormData] = useState({
    income: 0,
    additionalIncome: 0,
  });

  const handleChange = (e) => {
    e.target.name === "income"
      ? (income = e.target.value)
      : (additionalIncome = e.target.value);
    let sum = parseInt(income) + parseInt(additionalIncome);
    setFormData({
      ...formData,
      amount: sum,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log("event", e);
    e.preventDefault();
    createIncome(formData);
    props.handleOnClick()
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <input
          type="number"
          autoComplete="off"
          id="income"
          name="income"
          required={true}
          placeholder="Regular Monthly Income"
          onChange={handleChange}
        />
        <input
          type="number"
          autoComplete="off"
          id="additionalIncome"
          name="additionalIncome"
          placeholder="Additional Income"
          onChange={handleChange}
        />
      </div>
      <button>Next</button>
    </form>
  );
};

export default IncomeForm;
