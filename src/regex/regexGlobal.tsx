export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const isValidEmail = emailRegex.test(email);
  return isValidEmail;
};
export const containsCharacter = (value: string): boolean => {
  const regex = /·/;
  return regex.test(value);
};
