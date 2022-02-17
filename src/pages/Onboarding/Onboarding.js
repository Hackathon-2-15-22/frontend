import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import IncomeForm from '../../components/IncomeForm/IncomeForm';

const Onboarding = props => {
    // const [income, setIncome] = useState(0)

    // const handleChange = e => {
    //     setIncome({...income, [e.target.name]: e.target.value})
    // }

    return (
        <>
        <Navbar/>
        <div>
            <div>
                1. Your Monthly Income
            </div>
            <IncomeForm {...props}/>

        </div>
        </>
        
    )
}

export default Onboarding