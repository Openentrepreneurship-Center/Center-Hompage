import { useEffect } from 'react'

function Modal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [project])

  useEffect(() => {
    if (!project) return
    const handleKeyDown = e => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="modal"
      style={{ display: 'flex' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="닫기">
          &times;
        </button>
        <div className="modal-body">
          <img src={project.image} alt={project.title} />
          <div className="modal-info">
            <h2>{project.title}</h2>
            <p>{project.modalDescription}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
