import React from 'react';
import { connect } from 'react-redux';
import {incrementActionCreator,decrementActionCreator,stepActionCreator} from './actions/actionCreators'

const Component = (props) => {
    
    console.log(props);
    
    return (
        <div>
            <h1>{props.counter}</h1>
            <input type="number" name="step" onChange={props.changestep} value={props.step} />
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
        </div>
    );
}

const mapStateToProps = state => state;

// const mapDispatchToProps =(dispatch) =>{
//     return{
//         increment: ()=>dispatch(incrementActionCreator()),
//         decrement: ()=>dispatch(decrementActionCreator()),
//         changestep: (event)=>dispatch(stepActionCreator(event))
//     }
// }

const mapDispatchToProps={
    increment: incrementActionCreator,
    decrement: decrementActionCreator,
    changestep: stepActionCreator
}

const HOC = connect(mapStateToProps,mapDispatchToProps );
const ComponentWithStore = HOC(Component);

export default ComponentWithStore;
