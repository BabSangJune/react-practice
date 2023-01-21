import { useReducer }  from 'react';

const numberReducer = (state, action) => {
    switch (action.type) {
        case "decrement":
            return { count: state.count - 1 };
        case "increment":
            return { count: state.count + 1 };
        default:
            // 정의되지 않은 action type이 넘어왔을 때는 에러를 발생시킴
            throw new Error("Unsupported action type:", action.type);
    }
}

const countReducer = (state, action) => {
    switch (action.type) {
        // 🚨 reducer는 아무것도 하지 않는다.
        case 'set':
            return action.value
    }
}

const Reducer = () => {
    const [number, numberDispatch] = useReducer(numberReducer, { count: 0 });
    const [count, countDispatch] = useReducer(countReducer, 0)
    
    return (
        <div>
            <h1>Welcome Reducer</h1>
            <h1>Count: { number.count }</h1>
            <button onClick={ () => numberDispatch({ type: "decrement" }) }>-</button>
            <button onClick={ () => numberDispatch({ type: "increment" }) }>+</button>
            <div>----------------------------------------------------</div>
            <h1>Count: {count}</h1>
            <button onClick={() => countDispatch({ type: 'set', value: count + 1 })}>
                Increment
            </button>
            <button onClick={() => countDispatch({ type: 'set', value: count - 1 })}>
                Decrement
            </button>
        </div>
    );
};

export default Reducer;
