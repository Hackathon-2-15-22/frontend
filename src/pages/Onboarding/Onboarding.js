import { useState } from 'react';
import useCollapse from 'react-collapsed';
import IncomeForm from '../../components/IncomeForm/IncomeForm';

function Collapsible1() {
    const [ isExpanded, setExpanded ] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    function handleOnClick() {
        // Do more stuff with the click event!
        // Or, set isExpanded conditionally 
        setExpanded(!isExpanded);
    }

    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps({onClick: handleOnClick})}>
                {/* {isExpanded ? 'Collapse' : 'Expand'} */}
                1. Your Monthly Income
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    <IncomeForm handleOnClick={handleOnClick}/>
                </div>
            </div>
        </div>
    );
}

function Collapsible2() {
    const [ isExpanded, setExpanded ] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
function handleOnClick() {
        // Do more stuff with the click event!
        // Or, set isExpanded conditionally 
        setExpanded(!isExpanded);
    }
return (
        <div className="collapsible">
            <div className="header" {...getToggleProps({onClick: handleOnClick})}>
                {/* {isExpanded ? 'Collapse' : 'Expand'} */}
                2. Your Monthly Expenses
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    <IncomeForm/>
                </div>
            </div>
        </div>
    );
}

const Onboarding = () => {
    
    return (
        <>
            <Collapsible1 />
            <Collapsible2/>
        </>
    )
}

export default Onboarding