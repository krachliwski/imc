import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Tabela from './pages/Tabela';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/tabela" element={<Tabela/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;