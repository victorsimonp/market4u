-- Bootstrap e políticas complementares para o isolamento por mercado.
drop policy if exists market_mercados_select on public.market_mercados;
create policy market_mercados_select on public.market_mercados
  for select using (public.market_e_membro(market_id));

drop policy if exists market_mercados_insert on public.market_mercados;
create policy market_mercados_insert on public.market_mercados
  for insert to authenticated with check (true);

drop policy if exists market_usuarios_insert on public.market_usuarios;
create policy market_usuarios_insert on public.market_usuarios
  for insert to authenticated
  with check (market_usuario_id = auth.uid());

drop policy if exists market_usuarios_delete on public.market_usuarios;
create policy market_usuarios_delete on public.market_usuarios
  for delete using (market_usuario_id = auth.uid());

revoke all on function public.market_registrar_venda(uuid, integer) from public;
grant execute on function public.market_registrar_venda(uuid, integer) to authenticated;
