-- Remove caminhos que permitiam contornar o fluxo de autorização e estoque.
drop policy if exists market_usuarios_insert on public.market_usuarios;
drop policy if exists market_mercados_insert on public.market_mercados;
drop policy if exists market_vendas_insert on public.market_vendas;

drop policy if exists market_produtos_update on public.market_produtos;
create policy market_produtos_update on public.market_produtos
  for update using (public.market_e_membro(market_mercado_id))
  with check (public.market_e_membro(market_mercado_id));

revoke insert on public.market_vendas from anon, authenticated;
revoke insert on public.market_usuarios from anon, authenticated;
revoke insert on public.market_mercados from anon, authenticated;
