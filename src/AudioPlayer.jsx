import React, { useState, useEffect, useRef } from 'react';
import "./styles.css";

function AudioPlayer({tracks}) {
    //State
    const [index, setIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    // Destructure for conciseness
	const { title, artist, color, imageSource, audioSource } = tracks[index];

    //Refs
    const audioRef = useRef(new Audio(audioSource));
    const intervalRef = useRef(progress);
    const isReady = useRef(false);

    // Destructure for conciseness
	const { duration } = audioRef.current;

    const toPreviousTrack = () => {
        console.log('TODO go to previous');
      }
    
    const toNextTrack = () => {
        console.log('TODO go to next');
      }

    return (
        <div className="audio-player">
            <div className="track-info">
            <img
			    className="artwork"
			    src={imageSource}
			    alt={`Track artwork for ${title} by ${artist}`}
			  />
            <h2 className="title">{title}</h2>
            <h3 className="artist">{artist}</h3>
            </div>
        </div>
    );
}

export default AudioPlayer;