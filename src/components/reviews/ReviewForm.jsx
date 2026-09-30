import { useRef, useState } from 'react'
import { reviewsConfigured, submitReview } from '../../services/reviews'

const emptyForm = { first_name: '', last_name: '', review_date: '', rating: '', body: '' }

export default function ReviewForm() {
  const [form, setForm] = useState(emptyForm)
  const [sending, setSending] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const submitting = useRef(false)
  const today = new Date().toLocaleDateString('sv-SE')

  function updateField(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
    setMessage('')
    setError('')
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (submitting.current) return
    setMessage('')
    setError('')
    if (!form.first_name.trim() || !form.last_name.trim() || !form.body.trim()) {
      setError('Inserisci nome, cognome e testo: i campi non possono contenere solo spazi.')
      return
    }
    submitting.current = true
    setSending(true)
    try {
      await submitReview(form)
      setForm(emptyForm)
      setMessage('Grazie! La tua recensione è stata ricevuta e sarà visibile dopo l’approvazione.')
    } catch {
      setError('Non possiamo confermare il salvataggio. Il testo è rimasto nel modulo. Riprova più tardi; se avevi già inviato, verifica prima per evitare duplicati.')
    } finally {
      submitting.current = false
      setSending(false)
    }
  }

  return (
    <form className="review-form" onSubmit={handleSubmit} aria-labelledby="review-form-title">
      <h3 id="review-form-title">Lascia una recensione</h3>
      <p>Hai lavorato con me? Racconta la tua esperienza.</p>
      <fieldset disabled={sending || !reviewsConfigured}>
        <legend className="sr-only">I tuoi dati e la tua recensione</legend>
        <div className="review-name-fields">
          <label>Nome<input name="first_name" autoComplete="given-name" required maxLength={80} value={form.first_name} onChange={updateField} /></label>
          <label>Cognome<input name="last_name" autoComplete="family-name" required maxLength={80} value={form.last_name} onChange={updateField} /></label>
        </div>
        <label>Data dell’esperienza<input name="review_date" type="date" required min="2000-01-01" max={today} value={form.review_date} onChange={updateField} /></label>
        <fieldset className="review-rating">
          <legend>La tua valutazione</legend>
          <div className="review-rating-options">
            {[1, 2, 3, 4, 5].map((star) => (
              <label key={star}>
                <input type="radio" name="rating" value={star} checked={Number(form.rating) === star} onChange={updateField} required aria-label={`${star} ${star === 1 ? 'stella' : 'stelle'}`} />
                <span aria-hidden="true" className={star <= Number(form.rating) ? 'filled' : ''}>★</span>
              </label>
            ))}
          </div>
          <p className="review-rating-value">{form.rating ? `${form.rating} su 5` : 'Scegli da 1 a 5 stelle'}</p>
        </fieldset>
        <label>La tua recensione<textarea name="body" rows={6} required maxLength={3000} value={form.body} onChange={updateField} /></label>
        <p className="review-disclosure" id="review-disclosure">Nome, cognome, data, stelle e testo saranno pubblici solo dopo l’approvazione. Non serve un account.</p>
        <button type="submit" aria-describedby="review-disclosure">{sending ? 'Invio in corso…' : 'Pubblica'}</button>
      </fieldset>
      {!reviewsConfigured && <p className="review-notice">Il modulo sarà disponibile a breve.</p>}
      <p role="status">{message}</p>
      {error && <p role="alert" className="review-error">{error}</p>}
    </form>
  )
}
