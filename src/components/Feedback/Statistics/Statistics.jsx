import React from "react";

import scss from './statistics.module.scss'

function Statistics({good, neutral, bad,total, positiveFeedback}) {
    return (
        <ul className={scss.list}>
            <li className={scss.item}><p className={scss.title}>Good</p><span>{good}</span></li>
            <li className={scss.item}><p className={scss.title}>Neutral</p><span>{neutral}</span></li>
            <li className={scss.item}><p className={scss.title}>Bad</p><span>{bad}</span></li>
            <li className={scss.item}><p className={scss.title}>Total</p><span>{total}</span></li>
            <li className={scss.item}><p className={scss.title}>Positive feedback</p><span>{positiveFeedback}</span></li>
        </ul>
    )
}

export default Statistics