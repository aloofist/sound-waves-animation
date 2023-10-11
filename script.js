function PlaySound() {
    const audio = document.getElementById("audio");
    audio.play();
  }
  
  function StopSound() {
    const audio = document.getElementById("audio");
    audio.pause();
    // audio.currentTime = 0;
    // use if you want it to reset everytime
  }