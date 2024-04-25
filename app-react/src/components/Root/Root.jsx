import { Outlet } from "react-router-dom";
import Navigation from './Navigation/Navigation.jsx'
import { useContext } from 'react';
import { UsuarioContext } from '../../Context/usuario';

export default function Root(){
    return(
        <>
            <Navigation/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}