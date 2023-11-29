
const canvas = document.querySelector('canvas');
export const ctx = canvas.getContext('2d');

export const width = canvas.width = window.innerWidth; // Pongo el Width con mayúsculas
export const height = canvas.height = window.innerHeight; // Pongo el Height con mayúsculas

export function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
