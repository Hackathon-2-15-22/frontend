import { useState } from 'react';
import useCollapse from 'react-collapsed';
import IncomeForm from '../../components/IncomeForm/IncomeForm';
import Expenses from '../Expenses/Expenses';
import GoalForm from '../../components/GoalForm/GoalForm';


////////// Income
function CollapsibleIncome(props) {
    const [ isExpanded, setExpanded ] = useState(true);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    function handleOnClick() {
        // Do more stuff with the click event!
        // Or, set isExpanded conditionally 
        setExpanded(!isExpanded);
        props.setActive({
            income: isExpanded,
            expenses: false,
            goals: false
        })
        props.makeActive()
    }

    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps({onClick: handleOnClick})}>
                {/* {isExpanded ? 'Collapse' : 'Expand'} */}
                1. Your Monthly Income
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    <IncomeForm handleOnClick={handleOnClick} user={props.user}/>
                </div>
            </div>
        </div>
    );
}

/////////// Expenses
function CollapsibleExpenses(props) {
    const [ isExpanded, setExpanded ] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    function handleOnClick() {
        // Do more stuff with the click event!
        // Or, set isExpanded conditionally 
        console.log("hello")
        setExpanded(!isExpanded);
        props.setActive({
            income: false,
            expenses: isExpanded,
            goals: false
        })
        props.makeActive()
    }
return (
        <div className="collapsible">
            <div className="header" {...getToggleProps({onClick: handleOnClick})}>
                {/* {isExpanded ? 'Collapse' : 'Expand'} */}
                2. Your Monthly Expenses
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    <Expenses toggleClick={handleOnClick} user={props.user}/>
                </div>
            </div>
        </div>
    );
}

/////////////// Goals
function CollapsibleGoals(props) {
    const [ isExpanded, setExpanded ] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    function handleOnClick() {
        // Do more stuff with the click event!
        // Or, set isExpanded conditionally 
        setExpanded(!isExpanded);
        props.setActive({
            income: false,
            expenses: false,
            goals: isExpanded
        })
        props.makeActive()
    }
return (
        <div className="collapsible">
            <div className="header" {...getToggleProps({onClick: handleOnClick})}>
                {/* {isExpanded ? 'Collapse' : 'Expand'} */}
                3. Your Saving Goals
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    <GoalForm toggleClick={handleOnClick} user={props.user}/>
                </div>
            </div>
        </div>
    );
}

const Onboarding = (props) => {
    
    const [active, setActive] = useState({
        income: true,
        expenses: false,
        goals: false
    })

    function makeActive() {
        if (active.income === 'false' && active.goals === 'false') {
            setActive({
                income: false,
                expenses: true,
                goals: false
            })
        } else if (active.income === 'false' && active.expenses === 'false') {
            setActive({
                income: false,
                expenses: false,
                goals: true
            })
        } else if (active.expenses === 'false' && active.goals === 'false') {
            setActive({
                income: true,
                expenses: false,
                goals: false
            })
        }
    }



    return (
        <div className='onboarding'>
            <div className='title text-center'>
                Set up your profile<br/>in 3 easy steps!
            </div>
            <CollapsibleIncome user={props.user} makeActive={makeActive} setActive={setActive}/>
            <CollapsibleExpenses user={props.user} makeActive={makeActive} setActive={setActive}/>
            <CollapsibleGoals user={props.user} makeActive={makeActive} setActive={setActive}/>
        </div>
    )
}

export default Onboarding