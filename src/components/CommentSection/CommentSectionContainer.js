// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [commentState] = useState(props);

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {commentState.comments.map(p => (
        <Comment comment={p} key={p.username}/>
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
