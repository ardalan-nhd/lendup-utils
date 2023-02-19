const numberToTimeFormat = (n: number, ignoreHours: boolean = false) => {
  let sec_num = parseInt(String(n), 10);
  let hours: number | string = Math.floor(sec_num / 3600);
  let minutes: number | string = Math.floor((sec_num - hours * 3600) / 60);
  let seconds: number | string = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  let output = "";

  if (!ignoreHours) {
    output += hours + ":";
  }

  output += minutes + ":" + seconds;

  return output;
};

export default numberToTimeFormat;
