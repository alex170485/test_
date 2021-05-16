import axios from "axios";
import {minutesType} from "../stateManagment/minuteReducer";
type responseTypeCategories= {
    count: number,
    categories: string[]
}
type responseTypeBlock = {
    count: number,
    blocks: string[]
}

type responseTypeMinutes = {
    count: number,
    minutes: minutesType[]
}

export const getCategories = () => {
    return axios.get<responseTypeCategories>('https://rpback.com/api/games/test_categories?project_id=2',
    )
}

export const getMinutes = () => {
    return axios.get<responseTypeMinutes>('https://rpback.com/api/games/test_minutes?project_id=2')
}

export const getBlocks = () => {
    return axios.get<responseTypeBlock>('https://rpback.com/api/games/test_blocks?project_id=2')
}