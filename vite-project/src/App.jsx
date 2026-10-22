import { Notificacao } from './notificacao'
import { rotuloDoStatus } from './statusPedido'
import { AppTema } from './tema'

export default function App(){
return(
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Testes dos Exercícios</h1>

      <h2>1. Notificação</h2>
      <Notificacao mensagens={[]} />
      <Notificacao mensagens={['Sua compra foi aprovada']} />
      <Notificacao mensagens={['Item 1', 'Item 2']} />

      <h2>2. Status do Pedido</h2>
      <p>ENVIADO: {rotuloDoStatus('ENVIADO')}</p>
      <p>DESCONHECIDO: {rotuloDoStatus('ABC')}</p>

      <h2>3. Tema (Lifting State Up)</h2>
      <AppTema />
    </div>
  )
}
