const url = import.meta.env.VITE_SUPABASE_URL?.replace(/\/$/, '')
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export const reviewsConfigured = Boolean(url && key)

// La chiave pubblicabile identifica il progetto. I permessi sono nel database.
async function requestReviews(query, options = {}) {
  if (!reviewsConfigured) throw new Error('Invio non ancora disponibile. Riprova più tardi.')

  const response = await fetch(`${url}/rest/v1/reviews${query}`, {
    ...options,
    headers: { apikey: key, 'Content-Type': 'application/json', ...options.headers },
    signal: options.signal
      ? AbortSignal.any([options.signal, AbortSignal.timeout(15000)])
      : AbortSignal.timeout(15000),
  })

  if (!response.ok) throw new Error('Il servizio recensioni non è disponibile. Riprova più tardi.')
  return response
}

export async function getApprovedReviews(signal) {
  const response = await requestReviews(
    '?select=id,first_name,last_name,review_date,rating,body&status=eq.approved&order=review_date.desc,id.asc',
    { signal },
  )
  return response.json()
}

export async function submitReview(form) {
  // Non inviamo status: il database assegna pending e vieta l'autoapprovazione.
  // return=minimal evita di richiedere la lettura della recensione ancora privata.
  await requestReviews('', {
    method: 'POST',
    headers: { Prefer: 'return=minimal' },
    body: JSON.stringify({
      first_name: form.first_name.trim(),
      last_name: form.last_name.trim(),
      review_date: form.review_date,
      rating: Number(form.rating),
      body: form.body.trim(),
    }),
  })
}
