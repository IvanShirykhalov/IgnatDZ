import React from 'react'
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import {Routes, Route, Navigate} from "react-router-dom";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    PLUS_JUNIOR: '/plus-junior'

    // add paths
}

export function DZ() {
    return (
        <div>

{/*            Switch выбирает первый подходящий роут*/}
            <Routes>

{/*            в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR
            exact нужен чтоб указать полное совпадение (что после '/' ничего не будет)*/}
            <Route path='/'  element={() => <Navigate to={PATH.PRE_JUNIOR}/>}/>

            <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                // add routes
            <Route path={PATH.JUNIOR}/>
{/*            у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route path={PATH.PLUS_JUNIOR} element={<Error404/>}/>

            </Routes>

        </div>
    )
}

