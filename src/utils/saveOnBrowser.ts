import { differenceInMinutes } from 'date-fns';

export const saveOnBrowser = (key: string, value: any) => {
  const data = JSON.stringify(value);

  localStorage.setItem(key, data);
};

export const getFromBrowser = (key: string) => {
  const data = localStorage.getItem(key) ?? '';

  return JSON.parse(data);
};

export const generateKey = (type = 'flights') => {
  const date = new Date();
  localStorage.setItem(`${type}-selectedItems-age`, date.toISOString());

  return `${type}-selectedItems`;
};

export const getKey = (type = 'flights') => {
  return `${type}-selectedItems`;
};

export const isKeyExpired = (type = 'flights') => {
  try {
    const key = `${type}-selectedItems-age`;
    const oldDate = localStorage.getItem(key) ?? '';

    if (!oldDate) {
      return true;
    }

    const diff = differenceInMinutes(new Date(oldDate), new Date());

    if (Math.abs(diff) > 60) {
      localStorage.removeItem(`${type}-selectedItems`);
      localStorage.removeItem(`${type}-selectedItems-age`);

      return true;
    }

    return false;
  } catch (error) {
    console.error('Error checking if key is expired', error);
    return true;
  }
};
