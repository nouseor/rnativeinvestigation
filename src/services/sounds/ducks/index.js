const duckQuacking = require("./media/duck_quacking.mp3");
import Sound from "react-native-sound";

// Enable playback in silence mode
Sound.setCategory("Playback");

class SoundContainer {
  constructor(config) {
    this.sound = config.sound;
    this.name = config.name;
    this.image = config.image;
    this.loaded = false;
  }

  init() {
    this.soundInstance = new Sound(this.sound, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log("failed to load the sound", error);
        return;
      }

      this.loaded = true;
    });
  }

  destroy() {
    // @todo
  }

  play() {
    if (!this.loaded) {
      return;
    }
    this.soundInstance.play(success => {
      if (success) {
        console.log("successfully finished playing");
      } else {
        console.log("playback failed due to audio decoding errors");
      }
    });
  }
}

class Sounds {
  constructor(sounds) {
    this.sounds = sounds;
  }

  init() {
    this.sounds.forEach(s => s.init());
  }

  destroy() {
    this.sounds.forEach(s => s.destroy());
  }
}

export default new Sounds([
  new SoundContainer({
    name: "duck0",
    sound: "duck.mp3",
    image: require("./media/images/duck.jpeg")
  }),
  new SoundContainer({
    name: "mouse0",
    sound: "mouse.mp3",
    image: require("./media/images/mouse.jpeg")
  }),
  new SoundContainer({
    name: "duck1",
    sound: "src_services_sounds_ducks_media_duck_quacking.mp3" // duckQuacking
  })
]);
