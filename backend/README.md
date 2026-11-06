# Backend market4u

Camada independente para API REST e Supabase Edge Functions. O backend é a única camada autorizada a usar `SUPABASE_SERVICE_ROLE_KEY`; o frontend usa apenas a chave anônima.

## Contrato de erros

Toda falha deve retornar JSON no formato `{ "sucesso": false, "codigo_erro": "...", "mensagem": "..." }`, com mensagens em PT-BR. Os códigos estáveis ficam em `src/errors.js`.
