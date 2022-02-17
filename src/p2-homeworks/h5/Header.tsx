import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import s from './Header.module.css'


export function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link}>junior</NavLink>
            <NavLink to={PATH.PLUS_JUNIOR} className={s.link}>junior+</NavLink>
            <div className={s.block}/>
        </div>
    )
}

