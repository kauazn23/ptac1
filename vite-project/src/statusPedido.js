const statusTabela ={
  PENDENTE: 'Aguardando pagamento',
  ENVIADO: 'Pedido a caminho',
  ENTREGUE: 'Pedido entregue com sucesso',
}
export function rotuloDoStatus(status){
  return statusTabela[status] ?? 'Status desconhecido'
}