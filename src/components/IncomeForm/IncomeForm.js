import { useState } from 'react';
import {getUser} from '../../utility/auth';
import { createIncome } from '../../utility/incomeService';

const IncomeForm = props => {
    const [formData, setFormData] = useState({
        income: 0,
        additionalIncome: 0
    })

    const handleChange = e => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        let sum = parseInt(formData.income) + parseInt(formData.additionalIncome)
        createIncome(sum)
    }
    
    return (
        <form
            autoComplete="off"
            onSubmit={handleSubmit}
        >
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
        <button>
          Next
        </button>
    </form>
    )
}

export default IncomeForm