import sthArtwork from "./assets/sthartwork.jpg"
import positivTrumpetArt from "./assets/positiv-trumpet.jpg"

import sthMusic from "./assets/Save the Hero - Left You Behind.mp3"
import positivTrumpet from "./assets/John_Sib_positiv-trumpet.mp3"

const tracks = [
    {
        title: "positiv trumpet",
        artist: "John Sib",
        audioSource: positivTrumpet,
        imageSource: positivTrumpetArt,
        color: "#00aabf"
    },
    {
        title: "Left You Behind",
        artist: "Save the Hero",
        audioSource: sthMusic,
        imageSource: sthArtwork,
        color: "#df2d3b"
    },
    {
        title: "",
        artist: "",
        audioSource: "",
        imageSource: "",
        color: ""
    }
];

export default tracks;