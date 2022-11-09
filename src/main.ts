import './style.css';
import { setupSample, playSample } from './lib/audiolib';

// Audio configure
const audio: AudioContext = new window.AudioContext();
const analyser: AnalyserNode = audio.createAnalyser();
analyser.smoothingTimeConstant = 0.85;

const Btn = document.querySelector('button')!;

let dtmf: AudioBuffer;
const filepath = 'music.wav';

Btn.addEventListener('click', () => {
  const f = async () => {
    dtmf = await setupSample(audio, filepath);
    playSample(audio, dtmf);
  };
  f().catch(() => {});
});

// const FFT_SIZE = 8192;

// document.querySelector('button')?.addEventListener('click', () => {
//   const canvas: HTMLCanvasElement = document.querySelector('.visualizer')!;
//   const canvasCtx = canvas.getContext('2d');
//   const visualize = () => {
//     const WIDTH = canvas.width;
//     const HEIGNT = canvas.height;
//   };
// });
