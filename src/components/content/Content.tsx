import React from 'react';
import s from './content.module.sass'
import {Header} from './header/Header';
import {Items} from "./items/Items";

export const Content = () => {
    return (
        <div className={s.content}>
            <Header/>
            <Items/>
        </div>
    );
}
