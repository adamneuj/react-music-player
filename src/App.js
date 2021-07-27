import AudioPlayer from './AudioPlayer';
import tracks from './tracks';
import './App.css';

function App() {
  return (
    <div className="App">
      <AudioPlayer tracks={tracks}></AudioPlayer>
    </div>
  );
}

export default App;
