import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

function ToDo({text, onBtnClick, id}){
    return (
        <li>
            <Link to={`/${id}`}>
                {text} 
            </Link>
            <button onClick={onBtnClick}>DEL</button>
        </li>
    )
}

//ownProps는 해당 컴포넌트의 props
//store에서 가져오는 state을 ownProps에 넣어준다
function mapDispatchToProps(dispatch, ownProps){
    return {
        onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(ToDo);