-- Eseguire dopo reviews.sql. Tutti i dati di prova sono annullati alla fine.
begin;
insert into public.reviews (id, first_name, last_name, review_date, rating, body, status)
values
 ('11111111-1111-4111-8111-111111111111', 'Test', 'Privato', current_date, 5, 'Test pending', 'pending'),
 ('22222222-2222-4222-8222-222222222222', 'Test', 'Pubblico', current_date, 4, 'Test approved', 'approved'),
 ('33333333-3333-4333-8333-333333333333', 'Test', 'Rifiutato', current_date, 3, 'Test rejected', 'rejected');
set local role anon;
do $$
begin
  if exists(select 1 from public.reviews where id in
    ('11111111-1111-4111-8111-111111111111', '33333333-3333-4333-8333-333333333333')) then
    raise exception 'FAIL: recensione privata leggibile';
  end if;
  if not exists(select 1 from public.reviews where id = '22222222-2222-4222-8222-222222222222') then
    raise exception 'FAIL: recensione approvata non leggibile';
  end if;
  insert into public.reviews (first_name, last_name, review_date, rating, body)
  values ('Test', 'Invio', current_date, 5, 'Invio consentito');
  begin
    insert into public.reviews (first_name, last_name, review_date, rating, body, status)
    values ('Test', 'Abuso', current_date, 5, 'Autoapprovazione', 'approved');
    raise exception 'FAIL: autoapprovazione consentita';
  exception when insufficient_privilege then null;
  end;
  begin
    update public.reviews set status = 'approved';
    raise exception 'FAIL: modifica consentita';
  exception when insufficient_privilege then null;
  end;
  begin
    delete from public.reviews;
    raise exception 'FAIL: cancellazione consentita';
  exception when insufficient_privilege then null;
  end;
  begin
    insert into public.reviews (first_name, last_name, review_date, rating, body)
    values ('Test', 'Invalido', current_date, 6, 'Voto oltre il limite');
    raise exception 'FAIL: voto non valido accettato';
  exception when check_violation then null;
  end;
end $$;
reset role;
set local role authenticated;
do $$
begin
  begin
    perform 1 from public.reviews;
    raise exception 'FAIL: ruolo authenticated con permessi inattesi';
  exception when insufficient_privilege then null;
  end;
end $$;
reset role;
rollback;
