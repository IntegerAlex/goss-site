export const clearAllLocalStorage = () => {
    if (typeof window !== 'undefined') {
      localStorage.clear();
    }
  };
  
  export const clearLocalStorageKey = (key: string) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  };
  
  export const getAllLocalStorageKeysAndValues = () => {
    if (typeof window !== 'undefined') {
      const keys = Object.keys(localStorage);
      const items = keys.map((key) => ({ key, value: localStorage.getItem(key) }));
      return items;
    }
  };
  
  export const getLocalStorageValueForKey = (key: string) => {
    if (typeof window !== 'undefined') {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    };
    }
  
  export const setLocalStorageValueForKey = (key: string, value: any) => {
    if (typeof window !== 'undefined') {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    }
  };
  