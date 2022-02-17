import { useState } from 'react';
import { createIncome, updateIncome, getAllIncomes } from '../../utility/incomeService';

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


  // Function to see if user has income logged in db, if not it will create
  const findIncome = async() => {
      let result = await getAllIncomes()
      let count = 0;
        result.forEach((element, index) => {
            if(props.user.profile === result[index].owner){
                let incomeId = result[index]._id
                updateIncome(incomeId, formData)
                count++
            } 
        })
        if (count === 0) {
            createIncome(formData)
        }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    findIncome()
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
