export const CODIGOS_ERRO = Object.freeze({
  VALIDACAO: 'DADOS_INVALIDOS',
  NAO_AUTORIZADO: 'NAO_AUTORIZADO',
  SEM_PERMISSAO: 'SEM_PERMISSAO',
  ESTOQUE_INSUFICIENTE: 'ESTOQUE_INSUFICIENTE',
  RECURSO_NAO_ENCONTRADO: 'RECURSO_NAO_ENCONTRADO',
  ERRO_INTERNO: 'ERRO_INTERNO'
});

export function respostaErro(codigo_erro, mensagem, status = 400, detalhes) {
  return { status, body: { sucesso: false, codigo_erro, mensagem, ...(detalhes ? { detalhes } : {}) } };
}
