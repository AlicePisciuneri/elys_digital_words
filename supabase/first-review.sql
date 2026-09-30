-- Eseguire dopo reviews.sql. Il nome pubblico è il profilo fornito da Alice.
insert into public.reviews (id, first_name, last_name, review_date, rating, body, status)
values ('6dc6ac1b-cdb2-46fc-999a-8543e523a197', '@madhatterrecords', '', '2026-09-21', 5,
  'La collaborazione con Elys Digital Word mi ha davvero svoltato. Avevo bisogno di vendere i miei prodotti online, renderli disponibili e farmi conoscere ma non sapevo come fare raggiungere clienti e follower. La parte di marketing che mi ha implementato mi ha risolto un sacco di problemi e velocizzato il lavoro. Ora posso concentrarmi sul mio lavoro ed essere connesso al mio pubblico.', 'approved')
on conflict (id) do nothing;
