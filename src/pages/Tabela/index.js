import React from 'react';
import './tabela.css';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Tabela(){
    return(
        <div className='tabela-header'>
            <h1>Tabela de referência para a calculadora IMC</h1>
            <img src="TabelaIMC.png" alt="Tabela IMC"/>
            <Link to="/">
            <FiArrowLeft size={38} color="#FFF"/>
                Voltar para Home
            </Link>
        </div>
    )
}