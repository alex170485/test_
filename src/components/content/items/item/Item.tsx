import React from 'react';
import s from './item.module.sass'

type PropsType = {
    bgimg: any,
}

export const Item = (props: PropsType) => {
    return (
        <div className={s.item} style={{backgroundImage: `url(${props.bgimg})`}}>

        </div>
    );
}
