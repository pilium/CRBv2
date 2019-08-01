export const serializeForm = (forma) => Array.from(new FormData(forma), (field) => field.map(encodeURIComponent).join('=')).join('&');
