import React from "react";

export default function Entry({ entry }) {
  let videoId = entry.source.url.split("v=")[1];

  const getYotubeUrl = action => `https://www.youtube.com/${action}/${videoId}`;

  return (
    <>
      <a href={getYotubeUrl("watch")}>
        <h3>
          ({entry.votes.count}) {entry.title}
        </h3>
      </a>
      <p>{entry.description}</p>
      <div className="iframe-container">
        <iframe
          title="youtube preview"
          width="100%"
          src={getYotubeUrl("embed")}
        ></iframe>
      </div>
    </>
  );
}
