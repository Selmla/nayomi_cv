import { useState } from 'react';

export default function ProjectCard({
  title,
  subtitle,
  image,
  imageAlt,
  notes = [],
  direction = 'right',
  href,
  wip = false,
  githubUrl,
  demoUrl,
  stackContent,
  devNotesContent,
  showArrow = false,
}) {
  const [openNote, setOpenNote] = useState(null);
  const hasActions = githubUrl || demoUrl || stackContent || devNotesContent;

  const polaroidInner = (
    <>
      {wip && <img className="wip-sticker" src="/images/wip.png" alt="Work in progress" />}
      {hasActions && (
        <div className="project-actions">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" aria-label={`View ${title} on GitHub`}>
              <img src="/images/github-note.png" alt="GitHub" />
            </a>
          )}
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noreferrer" aria-label={`Open ${title} live demo`}>
              <img src="/images/demo-note.png" alt="Live demo" />
            </a>
          )}
          {stackContent && (
            <button
              type="button"
              aria-label="View tech stack"
              onClick={() => setOpenNote(openNote === 'stack' ? null : 'stack')}
            >
              <img src="/images/stack-note.png" alt="Stack" />
            </button>
          )}
          {devNotesContent && (
            <button
              type="button"
              aria-label="Read dev notes"
              onClick={() => setOpenNote(openNote === 'notes' ? null : 'notes')}
            >
              <img src="/images/devnotes-note.png" alt="Dev notes" />
            </button>
          )}
        </div>
      )}
      <img src={image} alt={imageAlt} />
      <div className="polaroid-caption">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </>
  );

  const noteEl = (
    <div className="project-note">
      {notes.map((text, i) => <p key={i}>{text}</p>)}
      {showArrow && <img src="/images/arrow2.png" alt="" className="arrow" />}
    </div>
  );

  const polaroidEl = href ? (
    <a className="polaroid" href={href} target="_blank" rel="noreferrer">
      {polaroidInner}
    </a>
  ) : (
    <div className="polaroid">
      {polaroidInner}
    </div>
  );

  return (
    <div className={`polaroid-row ${direction}`}>
      <div className="project-item">
        {direction === 'right' && noteEl}
        {polaroidEl}
        {direction === 'left' && noteEl}

        {openNote && (
          <div className="note-backdrop" onClick={() => setOpenNote(null)}>
            <div className="expanded-note" onClick={(e) => e.stopPropagation()}>
              <button
                className="close-note"
                type="button"
                onClick={() => setOpenNote(null)}
                aria-label="Close note"
              >
                ×
              </button>
              {openNote === 'stack' && stackContent && (
                <>
                  <h4>Stack</h4>
                  {stackContent.map((text, i) => <p key={i}>{text}</p>)}
                </>
              )}
              {openNote === 'notes' && devNotesContent && (
                <>
                  <h4>Dev Notes</h4>
                  {devNotesContent.map((text, i) => <p key={i}>{text}</p>)}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
