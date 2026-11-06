import fs from 'node:fs';
const arquivo = new URL('../openapi.yaml', import.meta.url);
const conteudo = fs.readFileSync(arquivo, 'utf8');
if (!conteudo.includes('sucesso:') || !conteudo.includes('codigo_erro:') || !conteudo.includes('mensagem:')) {
  throw new Error('O contrato OpenAPI deve declarar o formato padronizado de erros.');
}
console.log('Contrato OpenAPI validado.');
