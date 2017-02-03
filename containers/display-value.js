import { connect } from 'react-redux';
import Display from '../components/display';

const mapStateToProps = (state) => {
    let displayValue = state.operand1;

    if (state.operator) {
        displayValue += ' ' + state.operator + ' ';
    }
    if (state.operand2 !== undefined) {
        displayValue += state.operand2;
    }
   
    return { 
        value: displayValue 
    }
};

const DisplayValue = connect(mapStateToProps)(Display);

export default DisplayValue;