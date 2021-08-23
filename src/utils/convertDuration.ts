export function convertDuration(duration: number) {
  const min = Math.floor((duration % 3600) / 60);
  const sec = duration % 60;

  const timeString = [min, sec]
    .map(unit => String(unit).padStart(0))
    .join(':')

  return timeString;
}