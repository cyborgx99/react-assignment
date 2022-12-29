export const dateToYyyyMmDd = (date: Date) => {
  return date.toISOString().split('T', 1)[0];
};
