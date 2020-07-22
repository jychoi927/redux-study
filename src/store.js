import { configureStore, createSlice } from '@reduxjs/toolkit';

//createSlice는 이전 모든 기능들을 압축하여 코드를 대폭 줄여줌
//state, reducer, action이 전부 createSlice에 명시할 수 있음
const toDos = createSlice({
    name: "toDosReducer",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() });
        },
        remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
    }
})

export const { add, remove } = toDos.actions;

export default configureStore({ reducer:toDos.reducer });