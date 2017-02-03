import { connect } from 'react-redux';
import Column from '../components/column';
import { keyPressed } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        value: ownProps.value
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return { 
        onPress: key => dispatch(keyPressed(key))
    }
}

const ColumnContainer = connect(mapStateToProps, mapDispatchToProps)(Column);

export default ColumnContainer;