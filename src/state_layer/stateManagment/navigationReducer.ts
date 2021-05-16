import {ADD_CATEGORIES} from "../type/type";
import {getCategories} from "../api/api";


type initialStateType = {
    count: number | null,
    categories: Array<string> | null
}
const initialState:initialStateType = {
    count: null,
    categories: null
}



export const navigationReducer = (state = initialState, action: any)=> {
   switch (action.type) {
       case ADD_CATEGORIES : {
           return {...state, count: action.count, categories: action.categories}
       }
   }
    return state
}
export const navigationAC = (count: number, categories: string[]) => ({type: ADD_CATEGORIES, count, categories})
export const navigationTC = () => (dispatch: any) => {
    try {
        getCategories()
            .then((res) =>  {dispatch(navigationAC(res.data.count, res.data.categories))})
    } catch (e) {
        console.log(e)
    }

}