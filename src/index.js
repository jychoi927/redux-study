import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//action type을 변수로 관리
//문자열보다 변수로 관리하는게 에러감지나 유지보수면에서 더 편하기 때문
const ADD = "ADD"
const MINUS = "MINUS"

//Reducer : Store에 있는 state를 modify하는 역할. Reducer 이외에는 state를 modify하지 못함
//Reducer가 return 하는 값이 해당 state가 됨
//인자는 current state와 action 두 가지가 필요함
//action은 Object type(객체)이어야 하고 type이라는 프로퍼티를 반드시 가져야 함
const countModifier = (count = 0, action) => {
  //Reducer는 switch문으로 관리
  switch(action.type){
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

//Store : state(data)을 저장하는 곳
//Store 생성시 reducer를 인자로 반드시 넣어줘야 함
//Store는 4 가지 함수를 가짐
//1) dispatch 2) subscribe 3) getState 4) replaceReducer
const countStore = createStore(countModifier);

const onChange = () => {
  //getState은 현재 state을 반환
  number.innerText = countStore.getState();
}

//Subscirbe : Store에 상태가 변경되면 인자로 넣은 함수를 실행
countStore.subscribe(onChange);

//dispatch : reducer와 communicate하는 함수
//dispatch를 통해 reducer에 action을 보냄
const handleAdd = () => {
  countStore.dispatch({ type: ADD })
}

const handleMius = () => {
  countStore.dispatch({ type: MINUS })
}

add.addEventListener("click", handleAdd)
minus.addEventListener("click", handleMius)