import React, { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const handleCommentSubmit = () => {
    setComments([...comments, comment]);
    setComment('');
  };

  return (
    <div>
      <input 
        data-testid="comment-input" 
        value={comment} 
        onChange={(e) => setComment(e.target.value)} 
      />
      <button data-testid="submit-comment" onClick={handleCommentSubmit}>
        Enviar
      </button>
      <ul>
        {comments.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;