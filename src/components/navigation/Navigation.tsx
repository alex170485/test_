import React from 'react';
import s from './navigation.module.sass'
//images
import {ReactComponent as Dashboard} from "../../assets/images/dashboard.svg";
import {ReactComponent as Todo} from "../../assets/images/todolist.svg";
import {ReactComponent as Group} from "../../assets/images/group.svg";

export const Navigation = () => {
    return (
        <nav className={s.navigation}>
            <a className={s.link} href="#">
                <Dashboard/>
            </a>
            <a className={s.link} href="#">
                <Todo/>
            </a>
            <a className={s.link} href="#">
                <Group/>
            </a>
        </nav>
    );
}
