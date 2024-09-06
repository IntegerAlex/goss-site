const nodeEnv = process.env.NEXT_PUBLIC_APP_ENVIRONMENT || 'local';

export const DEBUG_TOOLS =
  nodeEnv.toLowerCase() === 'prod' ? false : true;

export function debug_console_log(...args: any[]) {
  if (DEBUG_TOOLS) {
    console.log(...args);
  }
}

export function debug_console_error(...args: any[]) {
  if (DEBUG_TOOLS) {
    console.error(...args);
  }
}


export function SnakeToCamel(object: any): any {
    if (typeof object !== 'object') {
      return object;
    }
  
    if (Array.isArray(object)) {
      return object.map(item => SnakeToCamel(item));
    }
  
    const camelObject: any = {};
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const camelKey = key.replace(/_id$/, 'id').replace(/_([a-z])/g, (match, group) => group.toUpperCase());
        camelObject[camelKey] = SnakeToCamel(object[key]);
      }
    }
    return camelObject;
  }

  export function convertSecondsToHoursMinutes(totalDuration: number) {
    const hours = Math.floor(totalDuration / 3600);
    const minutes = Math.floor((totalDuration % 3600) / 60);
    return { hours, minutes };
  }