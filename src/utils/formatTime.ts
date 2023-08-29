const formatTime = (date: string) => {
  const objectDate = new Date(date);
  const hour = objectDate.getUTCHours().toString().padStart(2, "0");
  const minutes = objectDate.getMinutes().toString().padStart(2, "0");

  const formatedTime = `${hour}:${minutes}`;
  return formatedTime;
};

export { formatTime };
