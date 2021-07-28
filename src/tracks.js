import sthArtwork from "./assets/sthartwork.jpg"
import positivTrumpetArt from "./assets/positiv-trumpet.jpg"
import futurebassArt from "./assets/futurebass.jpg"

import sthMusic from "./assets/Save the Hero - Left You Behind.mp3"
import positivTrumpet from "./assets/John_Sib_positiv-trumpet.mp3"
import futureBass from "./assets/jorikbasov_the-future-bass.mp3"

const tracks = [
    {
        title: "positiv trumpet",
        artist: "John Sib",
        audioSource: positivTrumpet,
        imageSource: positivTrumpetArt,
        color: "#00aabf"
    },
    {
        title: "the future bass",
        artist: "jorikbasov",
        audioSource: futureBass,
        imageSource: futurebassArt,
        color: "#a20079"
    },
    {
        title: "Left You Behind",
        artist: "Save the Hero",
        audioSource: sthMusic,
        imageSource: sthArtwork,
        color: "#df2d3b"
    }
];

export default tracks;