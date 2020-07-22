import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

//createReducer를 사용하면 state를 mutate 할 수 있음
//state를 mutate 할 경우 return을 하면 안됨 
//mutate 하지 않는 경우는 새로운 state를 return
const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        state.push({ text: action.payload, id: Date.now() })
    },
    [deleteToDo]: (state, action) => 
        state.filter(toDo => toDo.id !== action.payload)
})

//configureStore는 크롬에서 Redux DevTools를 사용할 수 있게 해줌
const store = configureStore({reducer});

export const actionCreators = {
    addToDo,
    deleteToDo
}

export default store;