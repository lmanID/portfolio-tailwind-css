/** @type {import('tailwindcss').Config} */
export const content = ['./index.html'];
export const theme = {
  extend: {
    colors: {
      'custom-red': '#DA0037',
      'custom-black': '#171717',
      'custom-silver': '#444444',
      'custom-light-white': '#EDEDED',
    },
    width: {
      'w-car': '83.76%',
      'w-screen-1/3': '33.33vw',
      'w-screen-1/2': '50vw',
    },
    height: {
      'h-car': '46.16%',
      'h-car-cover': '80.36%',
    },
  },
};
export const plugins = [];
