import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex)

  const prev = useCallback(() => setCurrent((i) => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent((i) => (i + 1) % images.length), [images.length])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  return createPortal(
    <div className="lb-overlay" onClick={onClose}>
      <button className="lb-close" onClick={onClose} aria-label="Fechar">✕</button>

      {images.length > 1 && (
        <>
          <button className="lb-arrow lb-arrow-prev" onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Anterior">‹</button>
          <button className="lb-arrow lb-arrow-next" onClick={(e) => { e.stopPropagation(); next() }} aria-label="Próxima">›</button>
        </>
      )}

      <div className="lb-content" onClick={(e) => e.stopPropagation()}>
        <img
          key={current}
          src={images[current].src}
          alt={images[current].label}
          className="lb-img"
        />
        <div className="lb-caption">
          <span className="lb-label">{images[current].label}</span>
          {images.length > 1 && (
            <span className="lb-counter">{current + 1} / {images.length}</span>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default function ImageGallery({ images, accentColor }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  if (!images?.length) return null

  return (
    <div className="gallery-section">
      <h2 className="detail-section-title">Capturas de tela</h2>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <button
            key={i}
            className="gallery-thumb"
            onClick={() => setLightboxIndex(i)}
            aria-label={`Ver ${img.label}`}
          >
            <img src={img.src} alt={img.label} loading="lazy" />
            <div className="gallery-thumb-overlay">
              <span className="gallery-thumb-icon">⤢</span>
              <span className="gallery-thumb-label">{img.label}</span>
            </div>
            <div className="gallery-thumb-bar" style={{ background: accentColor }} />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  )
}
