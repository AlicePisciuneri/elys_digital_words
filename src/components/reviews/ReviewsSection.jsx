import { useEffect, useState } from 'react'
import { getApprovedReviews, reviewsConfigured } from '../../services/reviews'
import ReviewCard from './ReviewCard'
import ReviewForm from './ReviewForm'
import './reviews.css'
import { initialReviews } from '../../content/initialReviews'

export default function ReviewsSection() {
  const [reviews, setReviews] = useState(reviewsConfigured ? [] : initialReviews)
  const [loading, setLoading] = useState(reviewsConfigured)
  const [error, setError] = useState('')
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    if (!reviewsConfigured) return
    const controller = new AbortController()
    getApprovedReviews(controller.signal)
      .then((data) => { if (!controller.signal.aborted) setReviews(data) })
      .catch(() => { if (!controller.signal.aborted) setError('Non riesco a caricare le recensioni in questo momento.') })
      .finally(() => { if (!controller.signal.aborted) setLoading(false) })
    return () => controller.abort()
  }, [attempt])

  function retry() {
    setError('')
    setLoading(true)
    setAttempt(attempt + 1)
  }

  return (
    <section id="recensioni" className="reviews-section" aria-labelledby="reviews-title">
      <p className="reviews-eyebrow">Esperienze di collaborazione</p>
      <h2 id="reviews-title">Le parole di chi ha lavorato con me.</h2>
      <div className="reviews-layout">
        <div className="reviews-list" aria-busy={loading}>
          {loading && <p role="status">Caricamento recensioni…</p>}
          {error && <div role="alert"><p>{error}</p><button type="button" onClick={retry} className="reviews-retry">Riprova</button></div>}
          {!loading && !error && reviews.length === 0 && <p className="review-notice">Le recensioni approvate saranno raccolte qui.</p>}
          {reviews.map((review) => <ReviewCard key={review.id} review={review} />)}
        </div>
        <ReviewForm />
      </div>
    </section>
  )
}
