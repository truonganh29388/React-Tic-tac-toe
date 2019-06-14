import React from 'react';
import PropTypes from 'prop-types'

const StepList = ({ stepList, onClick }) => {
    const renderStep = index => {
        if (index == 0) {
            return (<div className="row"><button key={index} onClick={() => { onClick(index) }}>Go to start</button></div>)
        }
        else {
            return (<div className="row"><button key={index} onClick={() => { onClick(index) }}>Go to step: {index}</button></div>)
        }
    }
    return (
        <div>
            {
                stepList.map((element, index) => {
                   return renderStep(index, onClick)
                })
            }   
        </div>
    )
}


StepList.propTypes = {
    stepList: PropTypes.arrayOf(PropTypes.any.isRequired),
    onClick: PropTypes.func.isRequired
}

export default StepList