import React, { useState, useEffect, useRef } from 'react';
import AudioControls from './AudioControls';
import Backdrop from './Backdrop';
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
        if (index - 1 < 0) {
            setIndex(tracks.length - 1);
        } else {
            setIndex(index - 1);
        }
      };
    
    const toNextTrack = () => {
        if (index < tracks.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
      };

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    //Changes the track when going forward or previous.
    useEffect(() => {
        audioRef.current.pause();

        audioRef.current = new Audio(audioSource);

        if(isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            isReady.current = true;
        }
    }, [index]);

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
            <AudioControls
                isPlaying={isPlaying}
                onPrevClick={toPreviousTrack}
                onNextClick={toNextTrack}
                onPlayPauseClick={setIsPlaying}
            />
            </div>
            <Backdrop
                trackIndex={index}
                activeColor={color}
                isPlaying={isPlaying}
            />
        </div>
    );
}

export default AudioPlayer;