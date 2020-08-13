import React from "react";

export default function Entry({ entry }) {
  let videoId = entry.source_url.split("v=")[1];

  return (
    <>
      <h3>({entry.vote_count}) {entry.title}</h3>
      <p>{entry.description}</p>
      <div class="iframe-container">
      <iframe title="youtube preview" width="100%" src={`https://www.youtube.com/embed/${videoId}`}></iframe>
      </div> 
    </>
  );
}
