import React from 'react'
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import {Routes, Route, Navigate} from "react-router-dom";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    PLUS_JUNIOR: '/plus-junior'

}

export function MyRoutes() {
    return (
        <div>

            <Routes>
                <Route path='/' element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR}/>
                <Route path={PATH.PLUS_JUNIOR}/>
                <Route path={'/error'} element={<Error404/>}/>
            </Routes>

        </div>
    )
}

