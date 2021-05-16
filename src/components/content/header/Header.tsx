import React, {useEffect} from 'react';
import s from './header.module.sass'
import {useDispatch} from "react-redux";
import {contentTC} from "../../../state_layer/stateManagment/contentReducer";
import {useTypedSelector} from "../../../state_layer/stateManagment/store";
import {navigationTC} from "../../../state_layer/stateManagment/navigationReducer";


export const Header = () => {
    const dispatch = useDispatch()
    const categories = useTypedSelector<string[]>(state => state.navigation.categories)

    useEffect(() => {
        dispatch(navigationTC())
    }, [])



    return (
        <header className={s.header}>
            <h1 className={s.title}>Courses</h1>
            <div className={s.filter_block}>
                <Button text={categories && categories[0]} isActive/>
                <Button text={categories && categories[1]} />
                <Button text={categories && categories[2]}/>
            </div>
        </header>
    );
}

const Button = ({text = '', isActive = false}: {text: string, isActive?: boolean}) => {
    return (
        <button className={`${s.filter_button} ${isActive && s.active}`}>{text}</button>
    );
}
