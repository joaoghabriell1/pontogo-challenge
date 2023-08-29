const formatDate = (date: string): string => {
  const objectDate = new Date(date);

  const formattedDate = objectDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  return formattedDate;
};

export { formatDate };
