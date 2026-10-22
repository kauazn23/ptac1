export function Notificacao({ mensagens = [] }){
  if (mensagens.length === 0){
    return <p>Nenhuma notificação nova</p>
}

const qtd = mensagens.length;
const texto = qtd === 1 ? 'notificação nova' : 'notificações novas';

  return <p>Você tem {qtd} {texto}</p>
}