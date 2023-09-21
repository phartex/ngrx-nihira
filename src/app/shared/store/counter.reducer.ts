import { createReducer, on } from "@ngrx/store";
import { customCrement, decrement, increment, reset, updateName } from "./counter.actions";
import { initialState } from "./counter.state";



export const counterReducer = createReducer(initialState,
    on(increment, (state) => {
        return { ...state, counter: state.counter + 1 }
    }),
    on(decrement, (state) => {
        return { ...state, counter: state.counter - 1 }
    }),
    on(reset, (state) => {
        return { ...state, counter: 0 }
    }),
    on(customCrement, (state, action) => {
        return {
            ...state,
            counter: action.action == "add" ? state.counter + action.value : state.counter - action.value
        }
    }),
    on(updateName, (state, action) => {
        return {
            ...state,
            channelName: action.channel
        }
    })

)