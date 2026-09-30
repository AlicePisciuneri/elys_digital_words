export default function ReviewCard({ review }) {
  const date = new Date(`${review.review_date}T12:00:00`).toLocaleDateString('it-IT', {
    day: 'numeric', month: 'long', year: 'numeric',
  })

  return (
    <article className="review-card">
      <div className="review-stars" role="img" aria-label={`${review.rating} stelle su 5`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} aria-hidden="true" className={star <= review.rating ? 'filled' : ''}>★</span>
        ))}
      </div>
      <h3>{review.first_name} {review.last_name}</h3>
      <time dateTime={review.review_date}>{date}</time>
      <p className="review-body">{review.body}</p>
    </article>
  )
}
