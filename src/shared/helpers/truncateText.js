const truncateText = (str) => {
  str = str.trim();
  return str.length > 66 ? str.slice(0, 65) + "..." : str;
};

export default truncateText;
