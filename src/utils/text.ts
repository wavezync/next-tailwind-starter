export const trimTextWithEllipsis = (text: string, maxLength = 30) => {
  if (text.length > maxLength) {
    return `${text.slice(0, maxLength)}...`;
  }
  return text;
};

export const trimText = (text: string, maxLength = 30) => {
  if (text.trim().length > maxLength) {
    return `${text.trim().slice(0, maxLength)}`;
  }
  return text;
};
