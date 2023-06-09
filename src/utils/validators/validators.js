export const requiredField = (value) => {
  if (value) return undefined;
  return "Requred!";
};

export const requiredTextMsg = (value) => (value ? undefined : "Required");

export const emailValid = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Неверный email адресс"
    : undefined;

export const maxLength = (max) => (value) =>
  value && value.length > max ? `Не более ${max} символов` : undefined;
export const maxLength15 = maxLength(15);
export const maxLength50 = maxLength(50);

export const minLength = (min) => (value) =>
  value && value.length < min ? `Не менее ${min} символов` : undefined;
export const minLength5 = minLength(5);
