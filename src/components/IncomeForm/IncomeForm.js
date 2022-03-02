import { useState } from 'react';
import { createIncome, updateIncome, getAllIncomes } from '../../utility/incomeService';

const IncomeForm = (props) => {
  const [formData, setFormData] = useState({
    regularAmount: 0,
    additionalAmount: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  // Function to see if user has income logged in db, if not it will create
  const findIncome = async() => {
      let result = await getAllIncomes()
      let count = 0;
        result.forEach((element, index) => {
            if(props.user.profile === result[index].owner){
                let incomeId = result[index]._id
                console.log(formData, incomeId)
                updateIncome(incomeId, formData)
                count++
            } 
        })
        if (count === 0) {
            createIncome(formData)
        };
  };

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
          id="regularAmount"
          name="regularAmount"
          required={true}
          placeholder="Regular Monthly Income"
          onChange={handleChange}
        />
        <input
          type="number"
          autoComplete="off"
          id="additionalAmount"
          name="additionalAmount"
          placeholder="Additional Income"
          onChange={handleChange}
        />
      </div>
      <button>Next</button>
    </form>
  );
};

export default IncomeForm;
