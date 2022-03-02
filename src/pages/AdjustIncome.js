import { useState, useEffect } from "react";
import {
  createIncome,
  updateIncome,
  getAllIncomes,
  getIncomeById,
} from "../utility/incomeService";
import { useNavigate } from "react-router-dom";


const AdjustIncome = (props) => {
  const navigate = useNavigate();

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

  //Function to pre-populate income field
  const getIncome = async () => {
    let incomeId = "";
    let result = await getAllIncomes();
    result.forEach((element, index) => {
      if (props.user.profile === result[index].owner) {
        incomeId = result[index]._id;
      }
    });
    let data = await getIncomeById(incomeId);
    setFormData({
      regularAmount: data.regularAmount,
      additionalAmount: data.additionalAmount,
    })
    return data
  };

  useEffect(() => {
    getIncome();
  },[]);

  // Function to see if user has income logged in db, if not it will create
  const findIncome = async () => {
    let result = await getAllIncomes();
    let count = 0;
    result.forEach((element, index) => {
      if (props.user.profile === result[index].owner) {
        let incomeId = result[index]._id;
        updateIncome(incomeId, formData);
        count++;
      }
    });
    if (count === 0) {
      createIncome(formData);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    findIncome();
    navigate("/home");
  };

  return (
    <div className="adjust">
      <h1 className="title">Adjust Your Income</h1>
      <form autoComplete="off" onSubmit={handleSubmit} >
        <div>
          <input
            type="number"
            autoComplete="off"
            id="regularAmount"
            name="regularAmount"
            value={formData.regularAmount}
            required={true}
            placeholder="Regular Monthly Income"
            onChange={handleChange}
          />
          <input
            type="number"
            autoComplete="off"
            id="additionalAmount"
            name="additionalAmount"
            value={formData.additionalAmount}
            placeholder="Additional Income"
            onChange={handleChange}
          />
        </div>
        <div className="adjustButtons">
          <button className="b1">Update</button>
          <button className="b1" onClick={() => navigate('/home')}>Home</button>
        </div>
      </form>
    </div>
  );
};

export default AdjustIncome;
