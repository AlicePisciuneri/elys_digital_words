# Recensioni: installazione e gestione

Modifiche preparate sul commit 11f5138 del 25 settembre 2026.
La cartella originale sul Desktop non è stata modificata. Nessun deploy eseguito.

## Cosa cambia

Sezione dopo i progetti e prima dei contatti; card scure con stelle viola, autore,
data e testo. Nessuna foto e nessun account per i visitatori. Form con campi
obbligatori, stelle selezionabili anche da tastiera e messaggi di errore/conferma.
Tre piccoli componenti React, useState/useEffect, array e map. Nessuna nuova dipendenza.

La prima recensione è di @madhatterrecords, 21/09/2026, 5 stelle. Solo la parola
marketing è stata corretta su indicazione di Alice. Non è stato inventato un cognome.

## Collegare Supabase

1. Accedi a https://supabase.com/dashboard e crea un progetto, per esempio
   elys-digital-words. Scegli una regione europea e conserva la password del database.
2. Apri SQL Editor, crea una query e incolla il contenuto di supabase/reviews.sql.
   Eseguilo una sola volta in un progetto senza una tabella reviews preesistente.
3. Esegui supabase/first-review.sql per inserire la recensione già approvata.
4. Dalla finestra Connect o dalle impostazioni API recupera Project URL e
   Publishable key (sb_publishable_...). Non usare secret o service_role nel sito.
5. Copia .env.example in .env.local e compila i due valori. Riavvia npm run dev.
6. Su Vercel aggiungi gli stessi nomi nelle Environment Variables del progetto
   e fai un nuovo deploy dopo le verifiche sotto. Vite legge questi valori in build.

Prima del collegamento si vede solo la recensione fornita da Alice e il modulo
è disabilitato. Dopo il collegamento il database è l'unica fonte: se rifiuti una
recensione, il sito non la recupera da una copia locale. La pagina legge i dati
all'apertura/ricaricamento; non usa aggiornamenti in tempo reale.

## Approvare

Apri Table Editor → reviews e filtra status = pending. Leggi il testo e cambia
status in approved per pubblicare oppure rejected per non pubblicare. Ricarica
il sito per vedere il risultato. Non serve costruire un'area amministrativa.

## Come è organizzato il codice

- src/components/reviews/ReviewsSection.jsx carica l'array e lo mostra con map.
- ReviewCard.jsx mostra una recensione; reviews.css contiene stili solo per la sezione.
- ReviewForm.jsx gestisce i campi e invia; non aggiunge recensioni all'elenco pubblico.
- src/services/reviews.js contiene le sole due operazioni, lettura e invio,
  usando fetch e l'API REST fornita da Supabase.
- src/content/initialReviews.js è usato solo senza configurazione Supabase.
- supabase/reviews.sql definisce struttura, controlli e permessi del database.

Il database permette ai visitatori di inserire soltanto i cinque campi del form,
lascia status a pending, vieta modifica/cancellazione e mostra solo approved.
Il cognome è obbligatorio negli invii pubblici; l'eccezione del profilo esistente
viene inserita esclusivamente dal SQL Editor. Un filtro React da solo non protegge
le recensioni: per questo le regole sono anche nel database.

## Verifiche prima della pubblicazione

Build e lint verificati localmente. L'integrazione con un database reale richiede
il progetto Supabase: non è stata ancora eseguita.

1. Invia una recensione di prova e controlla che compaia nel pannello come pending.
2. In una finestra privata ricarica il sito: la prova deve restare invisibile.
3. Approva dal pannello e ricarica: ora deve apparire. Prova anche rejected.
4. Esegui supabase/check-permissions.sql nel SQL Editor: esegue verifiche
   transazionali dei permessi e termina con rollback, senza lasciare dati di prova.
5. Simula un errore di rete: niente conferma di successo, testo del form conservato.

La moderazione impedisce la pubblicazione automatica, non l'invio di spam al
database. Questa prima versione non include CAPTCHA o limiti per indirizzo IP.

Documentazione: https://supabase.com/docs/guides/database/postgres/row-level-security
e https://supabase.com/docs/guides/api .
