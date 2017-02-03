import { KEY_PRESSED } from '../actions/action-types';

const initialState = {
    operand1: 0.0,
    operator: undefined,
    operand2: undefined
};

const calc = (state = initialState, action) => {
    switch (action.type) {
        case KEY_PRESSED:
            if (action.key == "CE") {
                return initialState;
            }
            if (state.operator) {
                if (state.operand2) {
                    if (["-", "+", "*", "/", "="].indexOf(action.key) >= 0) {
                        switch (state.operator) {
                            case "+":
                                return { 
                                    operand1: state.operand1 + state.operand2,
                                    operator: action.key !== "=" ? action.key : undefined,
                                    operand2: undefined 
                                }
                            case "-":
                                return { 
                                    operand1: state.operand1 - state.operand2,
                                    operator: action.key !== "=" ? action.key : undefined,
                                    operand2: undefined 
                                }
                            case "*":
                                return { 
                                    operand1: state.operand1 * state.operand2,
                                    operator: action.key !== "=" ? action.key : undefined,
                                    operand2: undefined 
                                }
                            case "/":
                                return { 
                                    operand1: state.operand1 / state.operand2,
                                    operator: action.key !== "=" ? action.key : undefined,
                                    operand2: undefined 
                                }
                        }
                    }
                    return {
                        ...state,
                        operand2: parseFloat(state.operand2 + action.key)
                    }
                } else {
                    if (["-", "+", "*", "/"].indexOf(action.key) >= 0) {
                        return {
                            ...state,
                            operator: action.key
                        }
                    }
                    if (action.key === "=") {
                        return {
                            ...state,
                            operator: undefined
                        }
                    }
                    return {
                        ...state,
                        operand2: parseFloat(action.key)
                    }
                }
            } else {
                if (["-", "+", "*", "/"].indexOf(action.key) >= 0) {
                    return {
                        ...state,
                        operator: action.key
                    }
                }
                if (action.key !== "=") {
                    return {
                        ...state,
                        operand1: parseFloat(state.operand1 + action.key)
                    }                    
                }
            }
            return state;
        default:
            return state;
    }
};

export default calc;