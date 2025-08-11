import React from 'react';
import './Notes.css';

const Notes = () => {
  const notes = [
    {
      title: 'DBMS Notes',
      filename: 'DBMS.pdf',
      description: 'Database Management System study materials'
    },
    {
      title: 'OOPS Notes',
      filename: 'OOPS.pdf',
      description: 'Object-Oriented Programming concepts and examples'
    },
    {
      title: 'OS Notes',
      filename: 'OS.pdf',
      description: 'Operating System fundamentals and concepts'
    }
  ];

  const handleView = (filename) => {
    window.open(`/${filename}`, '_blank');
  };

  const handleDownload = (filename, title) => {
    const link = document.createElement('a');
    link.href = `/${filename}`;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="notes-section">
      <div className="container">
        <h2 className="section-title">Study Notes</h2>
        <div className="notes-grid">
          {notes.map((note, index) => (
            <div key={index} className="note-card">
              <div className="note-content">
                <h3 className="note-title">{note.title}</h3>
                <p className="note-description">{note.description}</p>
                <div className="note-actions">
                  <button 
                    className="btn btn-view"
                    onClick={() => handleView(note.filename)}
                  >
                    View PDF
                  </button>
                  <button 
                    className="btn btn-download"
                    onClick={() => handleDownload(note.filename, note.title)}
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notes;
