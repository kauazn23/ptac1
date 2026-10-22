import { useState } from 'react'

function BotoesDeTema({ temaAtual, aoMudarTema }){
  return(
    <div>
      <button disabled={temaAtual === 'claro'} onClick={() => aoMudarTema('claro')}>
        Claro
      </button>
      <button disabled={temaAtual === 'escuro'} onClick={() => aoMudarTema('escuro')}>
        Escuro
      </button>
    </div>)
}

function Previa({ tema }){
  return <p>Tema atual: <strong>{tema}</strong></p>
}

export function AppTema(){
  const [tema, setTema] = useState('claro')
  return (
    <div>
      <BotoesDeTema temaAtual={tema} aoMudarTema={setTema}/>
      <Previa tema={tema}/>
    </div>
  )
}