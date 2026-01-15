import React from "react";
import songsData from "./songs1";

function Songs({ name, language }) {
  if (!songsData[language] || songsData[language].length === 0) {
    return <h2>No songs found for {language}</h2>;
  }

  return (
    <div className="songs-container">
      <h2>Hello {name}!</h2>
      <p>Here are some {language} songs:</p>

      <ul className="songs-list">
        {songsData[language].map((song, index) => (
          <li key={index}>
            <p>{song.title}</p>
            <audio controls>
              <source src={song.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Songs;
