/* eslint-disable react-hooks/exhaustive-deps */
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

    const startTimer = () => {
        //Clears any times already running
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                toNextTrack();
            } else {
                setProgress(audioRef.current.currentTime);
            }
        }, [1000]);
    };

    const onScrub = (value) => {
        // Clear any timers already running
      clearInterval(intervalRef.current);
      audioRef.current.currentTime = value;
      setProgress(audioRef.current.currentTime);
    }
    
    const onScrubEnd = () => {
      // If not already playing, start
      if (!isPlaying) {
        setIsPlaying(true);
      }
      startTimer();
    }

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            startTimer();
        } else {
            clearInterval(intervalRef.current);
            audioRef.current.pause();
        }
    }, [isPlaying]);

    //Changes the track when going forward or previous.
    useEffect(() => {
        audioRef.current.pause();

        audioRef.current = new Audio(audioSource);
        setProgress(audioRef.current.currentTime);

        if(isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
            startTimer();
        } else {
            isReady.current = true;
        }
    }, [audioSource, index]);

    useEffect(() => {
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        }
    }, []);

    const currentPercentage = duration ? `${(progress / duration) * 100}%` : '0%';
    const trackStyling = `
        -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
    `;

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
                <input
                    type="range"
                    value={progress}
                    step="1"
                    min="0"
                    max={duration ? duration : `${duration}`}
                    className="progress"
                    onChange={(e) => onScrub(e.target.value)}
                    onMouseUp={onScrubEnd}
                    onKeyUp={onScrubEnd}
                    style={{ background: trackStyling }}
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