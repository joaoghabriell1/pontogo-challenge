const formatTime = (date: string) => {
  const objectDate = new Date(date);
  const formattedTime = objectDate.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${formattedTime}h`;
};

export { formatTime };
