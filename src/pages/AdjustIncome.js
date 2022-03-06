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

    <main class="column">
      <h1 className="title text-center">Adjust Your Income</h1>
      <div className="box">
        
        <form className="adjust" autoComplete="off" onSubmit={handleSubmit}>
          <div className="row">
            <div>
              <label htmlFor="">Monthly</label>
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
            </div>
            <div>
              <label htmlFor="">Additional</label>
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
          </div>
          <div className="adjustButtons">
            <button className="b2">Update</button>
            <button className="b2" onClick={() => navigate('/home')}>Home</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AdjustIncome;
