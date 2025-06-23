const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const playlist = document.getElementById("playlist");

// Lista de canciones en carpeta /music
const canciones = [
  { nombre: "Oye Gela", archivo: "music/oye-gela-escuchate-esto-saturado.mp3" },
  { nombre: "Som do Zap Zap", archivo: "music/som-do-zap-zap-estourado.mp3" },
  { nombre: "Vamo Acordar", archivo: "music/vamo-acordar.mp3" }
];

// Mostrar la lista
canciones.forEach((cancion, index) => {
  const li = document.createElement("li");
  li.textContent = cancion.nombre;
  li.addEventListener("click", () => cargarCancion(index));
  playlist.appendChild(li);
});

let cancionActual = 0;

function cargarCancion(index) {
  cancionActual = index;
  audio.src = canciones[index].archivo;
  audio.play();
}

playBtn.addEventListener("click", () => audio.play());
pauseBtn.addEventListener("click", () => audio.pause());
stopBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
});

volume.addEventListener("input", () => {
  audio.volume = volume.value;
});

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

