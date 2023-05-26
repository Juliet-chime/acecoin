export const getHourMinute = () => {
    const currentDate = new Date();

    const currentHour = currentDate.getHours().toString();
    const currentMinute = currentDate.getMinutes().toString();

    return {currentHour,currentMinute}
}

export const cc_format = (value) => {
    const v = value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .substr(0, 16);
    const parts = [];
  
    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }
  
    return parts.length > 1 ? parts.join(" - ") : value;
  }