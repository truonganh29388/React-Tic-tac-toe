export const newStep = (index)  => ({ 
        type: PlayTypes.NEW_STEP,
        index
})

export const goToStep = step  => ({ 
        type: PlayTypes.GO_TO_STEP,
        index:step
}) 

export const PlayTypes = ({
    NEW_STEP: 'NEW_STEP',
    GO_TO_STEP: 'GO_TO_STEP'   
})