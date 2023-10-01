const Soundcard = ({ letter, color }) => {
  let audio = new Audio(`/assets/sounds/${letter}.mp3`);

  const playAudio = () => {
    audio.play();
  };

  return (
    <div className="soundcard card" style={{ borderColor: color }}>
      <span className="soundcard__letter" style={{ color }}>
        {letter}
      </span>

      <button
        onClick={() => playAudio()}
        className="audio-btn action-btn"
        style={{
          backgroundColor: color,
        }}
      >
        Play Sound
      </button>
    </div>
  );
};

export default Soundcard;
