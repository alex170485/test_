import React, {useEffect} from 'react';
import s from './items.module.sass'
import {Item} from "./item/Item";
//images
import img1 from '../../../assets/images/mock_image.png'
import img2 from '../../../assets/images/mock_image1.png'
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../state_layer/stateManagment/store";
import {contentTC} from "../../../state_layer/stateManagment/contentReducer";
import {addMinutesTC, minutesType} from "../../../state_layer/stateManagment/minuteReducer";

export const Items = () => {
    const dispatch = useDispatch()
    const content = useTypedSelector<string[]>(state => state.content.blocks)
    const time = useTypedSelector<minutesType[]>(state => state.minute.minutes)

    useEffect(()=> {
        dispatch(contentTC())
    }, [])
    useEffect(()=> {
        dispatch(addMinutesTC())
    }, [])


    return (
        <div className={s.items}>
            <Item bgimg={img1} />
            <Item bgimg={img2} />
        </div>
    );
}
