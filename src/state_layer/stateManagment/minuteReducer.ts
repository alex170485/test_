import {ADD_MINUTES} from "../type/type";
import {getMinutes} from "../api/api";

export type minutesType = {
    id: number,
    time: number
}
type initialStateType = {
    count: number | null,
    minutes: minutesType[] | null
}
const initialState: initialStateType = {
    count: null,
    minutes: null
}


export const minuteReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_MINUTES : {
            return {...state, count: action.count, minutes: action.minutes}
        }
    }
    return state
}

const addMinutesAC = (count: number, minutes: minutesType[]) => ({type: ADD_MINUTES, count, minutes})
export const addMinutesTC = () => (dispatch: any) => {
    try {
        getMinutes()
            .then((res => {
                dispatch(addMinutesAC(res.data.count, res.data.minutes))
            }))
    } catch (e) {
        console.log(e)
    }
}