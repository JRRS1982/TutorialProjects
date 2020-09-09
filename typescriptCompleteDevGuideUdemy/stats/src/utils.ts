export const dateStringToDate = (dateString: string): Date => {
  let dateNumbers = dateString
    .split('/') // split date by.. 
    .map((value: string): number => {
      return parseInt(value); // parse each string in the newly split array of strings to an int.
  });
  return new Date(dateNumbers[2], dateNumbers[1] - 1, dateNumbers[0]);
};