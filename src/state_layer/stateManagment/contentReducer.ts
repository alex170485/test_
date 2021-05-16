import {ADD_BLOCK} from "../type/type";
import {getBlocks} from "../api/api";

type initialStateType = {
    count: number | null,
    blocks: Array<string> | null
}
const initialState: initialStateType = {
    count: null,
    blocks: null
}

export const contentReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_BLOCK : {
            return {...state, count: action.count, blocks: action.blocks}
        }
    }
    return state
}

const contentAC = (count: number, blocks: string[]) => ({type: ADD_BLOCK, count, blocks})
export const contentTC = () => (dispatch:any) => {
    try {
        getBlocks()
            .then((res)=> {dispatch(contentAC(res.data.count, res.data.blocks))})
    } catch (e) {
        console.log(e)
    }

}