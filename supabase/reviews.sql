-- Eseguire una volta nel SQL Editor di Supabase, in un nuovo progetto.
begin;

create table public.reviews (
  id uuid primary key default gen_random_uuid(),
  first_name text not null check (char_length(btrim(first_name)) between 1 and 80),
  last_name text not null check (char_length(last_name) <= 80),
  review_date date not null check (review_date >= date '2000-01-01' and review_date <= current_date),
  rating smallint not null check (rating between 1 and 5),
  body text not null check (char_length(btrim(body)) between 1 and 3000),
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now()
);

alter table public.reviews enable row level security;
revoke all on public.reviews from public, anon, authenticated;
grant select on public.reviews to anon;
-- I visitatori possono inviare solo questi campi, mai status, id o created_at.
grant insert (first_name, last_name, review_date, rating, body) on public.reviews to anon;

create policy "Read approved reviews" on public.reviews
  for select to anon using (status = 'approved');

create policy "Submit pending reviews" on public.reviews
  for insert to anon with check (status = 'pending' and char_length(btrim(last_name)) > 0);

-- Nessun permesso UPDATE o DELETE per i visitatori.
-- Alice approva nel Table Editor, modificando status da pending ad approved.
create index reviews_approved_date on public.reviews (review_date desc) where status = 'approved';

commit;
