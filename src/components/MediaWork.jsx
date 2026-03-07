import { useState } from 'react';
import { mediaWork } from '../data/portfolio';
import './MediaWork.css';

function MediaWork() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="media" className="section media">
      <div className="container">
        <h2 className="section-title">Video & Photo</h2>
        <p className="section-intro">Visual work—videos and photography.</p>
        <div className="media-grid">
          {mediaWork.map((item) => (
            <article key={item.id} className="media-card">
              {item.type === 'video' ? (
                <>
                  <div
                    className="media-preview"
                    onClick={() => setActiveVideo(activeVideo === item.id ? null : item.id)}
                  >
                    {activeVideo === item.id ? (
                      <video
                        src={item.videoUrl}
                        controls
                        autoPlay
                        playsInline
                        className="media-video"
                      />
                    ) : (
                      <>
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="media-thumb"
                          onError={(e) => {
                            e.target.src = 'https://placehold.co/600x340/1e1e24/7c3aed?text=Video';
                          }}
                        />
                        <span className="media-play-icon" aria-hidden>▶</span>
                      </>
                    )}
                  </div>
                  <h3 className="media-title">{item.title}</h3>
                  <p className="media-desc">{item.description}</p>
                </>
              ) : (
                <>
                  <div className="media-preview">
                    <img
                      src={item.imageUrl || item.thumbnail}
                      alt={item.title}
                      className="media-thumb"
                      onError={(e) => {
                        e.target.src = 'https://placehold.co/600x340/1e1e24/7c3aed?text=Photo';
                      }}
                    />
                  </div>
                  <h3 className="media-title">{item.title}</h3>
                  <p className="media-desc">{item.description}</p>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MediaWork;
