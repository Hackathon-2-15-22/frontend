import { useState, useEffect } from 'react';
import useCollapse from 'react-collapsed';
import IncomeForm from '../../components/IncomeForm/IncomeForm';
import Expenses from '../Expenses/Expenses';
import GoalForm from '../../components/GoalForm/GoalForm';


////////// Income
function CollapsibleIncome(props) {
    const [ isExpanded, setExpanded ] = useState(true);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    function handleOnClick() {
        // State to track if area is expanded or collapsed
        setExpanded(!isExpanded);
        //sets the next onboarding tab to open automatically
        props.setActive({
            income: false,
            expenses: true,
            goals: false
        });
    };

    return (
        <div key="col1" className="collapsible">
            <div className="header" {...getToggleProps({onClick: handleOnClick})}>
                1. Your Monthly Income
            </div>
            <div key="income1" {...getCollapseProps()}>
                <div key="income2" className="content">
                    <IncomeForm key="income3" handleOnClick={handleOnClick} user={props.user}/>
                </div>
            </div>
        </div>
    );
};

/////////// Expenses
function CollapsibleExpenses(props) {
    const [ isExpanded, setExpanded ] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    //if state updates the window will automatically open/close
    useEffect(() => {
        if(props.open === true) {
            setExpanded(true)
        } else if (props.open === false) {
            setExpanded(false)
        }
    },[props.open]);

    function handleOnClick() {
        // State to track if area is expanded or collapsed
        setExpanded(!isExpanded);
        //sets the next onboarding tab to open automatically
        props.setActive({
            income: false,
            expenses: false,
            goals: true
        });
    };

return (
        <div key="exp1" className="collapsible">
            <div key="exp2"className="header" {...getToggleProps({onClick: handleOnClick})}>
                2. Your Monthly Expenses
            </div>
            <div key="exp3" {...getCollapseProps()}>
                <div key="exp4" className="content">
                    <Expenses key="exp5" toggleClick={handleOnClick} user={props.user}/>
                </div>
            </div>
        </div>
    );
};

/////////////// Goals
function CollapsibleGoals(props) {
    const [ isExpanded, setExpanded ] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    //if state updates the window will automatically open/close
    useEffect(() => {
        if(props.open === true) {
            setExpanded(true)
        } else if (props.open === false) {
            setExpanded(false)
        }
    },[props.open]);

    function handleOnClick() {
        // State to track if area is expanded or collapsed
        setExpanded(!isExpanded);
    };

return (
        <div key="goal1" className="collapsible">
            <div key="goal2" className="header" {...getToggleProps({onClick: handleOnClick})}>
                3. Your Saving Goals
            </div>
            <div key="goal3" {...getCollapseProps()}>
                <div key="goal4" className="content">
                    <GoalForm key="goal5" toggleClick={handleOnClick} user={props.user}/>
                </div>
            </div>
        </div>
    );
};

const Onboarding = (props) => {
    
    const [active, setActive] = useState({
        income: true,
        expenses: false,
        goals: false
    });

    // function makeActive() {
    //     if (active.income === 'false' && active.goals === 'false') {
    //         setActive({
    //             income: false,
    //             expenses: true,
    //             goals: false
    //         })
    //     } else if (active.income === 'false' && active.expenses === 'false') {
    //         setActive({
    //             income: false,
    //             expenses: false,
    //             goals: true
    //         })
    //     } else if (active.expenses === 'false' && active.goals === 'false') {
    //         setActive({
    //             income: true,
    //             expenses: false,
    //             goals: false
    //         })
    //     };
    // };

    return (
        <div className='onboarding'>
            <div className='title text-center'>
                Set up your profile<br/>in 3 easy steps!
            </div>
            <CollapsibleIncome user={props.user} open={active.income} setActive={setActive}/>
            <CollapsibleExpenses user={props.user} open={active.expenses} setActive={setActive}/>
            <CollapsibleGoals user={props.user} open={active.goals} setActive={setActive}/>
        </div>
    );
};

export default Onboarding