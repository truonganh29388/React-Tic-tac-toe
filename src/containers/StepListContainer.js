import { connect } from 'react-redux'
import StepList from '../components/StepList';
import { goToStep } from '../actions/play';

const mapStateToProps = state => {
    return {
        stepList: state.history,
    }    
}

const mapDispatchToProps = dispatch  => {
    return {
        onClick: index  => {
            dispatch(goToStep(index))
         } 
    }
 }

const StepListContainer = connect(mapStateToProps,mapDispatchToProps)(StepList)

export default StepListContainer