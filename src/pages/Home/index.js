import React, { useState } from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';

export default function Home(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  function calcularIMC(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(imc < 18.5){
      setMensagem("Você está abaixo do peso! Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 18.5 && imc < 24.9){
      setMensagem("Peso ideal! Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 25 && imc < 29.9){
      setMensagem("Você está levemente acima do peso! Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 30 && imc < 34.9){
      setMensagem("Cuidado, Obesidade Grau 1! Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 35 && imc < 39.9){
      setMensagem("Cuidado, Obesidade Grau 2! Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 40){
      setMensagem("Cuidade, Obesidade Grau 3 ou Mórbida! Seu IMC: " + imc.toFixed(2))
    }

  }

  return(
    <div className="home">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>

      <div className="area-input">
        
        <input
          type="text"
          placeholder="Peso em (kg) Ex: 90"
          value={peso}
          onChange={ (e) => setPeso(e.target.value)}
        />

        <input
          type="text"
          placeholder="Altura em (cm) Ex: 180"
          value={altura}
          onChange={ (e) => setAltura(e.target.value)}
        />

        <button onClick={calcularIMC}>
          Calcular
        </button>

      </div>
      
      <button onClick={ () => navigate("/tabela")}>
          Conferir tabela de referência para o cálculo de IMC
      </button>

      <h2>{mensagem}</h2>
    </div>
  )
}