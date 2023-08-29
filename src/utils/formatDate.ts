const formatDate = (date: string): string => {
  const objectDate = new Date(date);
  const year = objectDate.getFullYear().toString().slice(-2);
  const day: string = objectDate.getDay().toString().padStart(2, "0");
  const month = objectDate.getMonth().toString().padStart(2, "0");

  const formatedDate = `${day}/${month}/${year}`;
  return formatedDate;
};

export { formatDate };
