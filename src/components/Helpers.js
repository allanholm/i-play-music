function msToMinutes(ms) {
  let seconds = Math.floor((ms / 1000) % 60);
  let minutes = Math.floor(ms / (1000 * 60) % 60);

  return `${minutes} : ${seconds.toString().padStart(2, "0")}`;
}

export { msToMinutes };