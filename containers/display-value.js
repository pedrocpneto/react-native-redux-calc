import { connect } from 'react-redux';
import Display from '../components/display.js';

const mapStateToProps = (state) => {
   return { value: state.displayValue }
};

const DisplayValue = connect(mapStateToProps)(Display);

export default DisplayValue;