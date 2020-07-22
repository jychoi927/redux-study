import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import ToDo from '../components/ToDo';

function Home({ toDos, addToDo }) {
    const [text, setText] = useState("");
    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        //connect를 통해 addToDo를 컴포넌트에 가져와서 사용할 수 있게 됨
        addToDo(text);
        setText("");
    }
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(toDo => (
                    <ToDo {...toDo} key={toDo.id}/>
                ))}
            </ul>
        </>
    )
}

//두가지
function mapStateToProps(state) {
    return { toDos: state };
}

function mapDispatchToProps(dispatch) {
    return { 
        addToDo: text => dispatch(actionCreators.addToDo(text))
     };
}

//connect는 컴포넌트를 스토어에 연결시켜주는 역할
//첫 번째 인자는 getState, 두 번째 인자는 dispatch에 해당하는 함수
//이름은 항상 mapStateToProps, mapDispatchToProps로 사용
//dispatch가 필요없는 경우 mapStateToProps만 인자로 넣어주고
//state가 필요없는 경우 첫번째 인자는 null로 넣어준다
export default connect(mapStateToProps, mapDispatchToProps)(Home);