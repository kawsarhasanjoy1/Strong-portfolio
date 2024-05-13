const dateFormeter = (originalDateString: string) => {
  const date = new Date(originalDateString);

  const day = date.getUTCDate().toString().padStart(2, "0"); // Get day and pad with leading zero if necessary
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // Get month (adding 1 as months are zero-based) and pad with leading zero if necessary
  const year = date.getUTCFullYear().toString().slice(-2); // Get last two digits of year

  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate
};

export default dateFormeter;

