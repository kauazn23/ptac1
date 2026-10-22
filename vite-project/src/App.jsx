import { Notificacao } from './notificacao'

export default function App(){
return(
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Testes dos Exercícios</h1>

      <h2>1. Notificação</h2>
      <Notificacao mensagens={[]} />
      <Notificacao mensagens={['Sua compra foi aprovada']} />
      <Notificacao mensagens={['Item 1', 'Item 2']} />
    </div>
  )
}
