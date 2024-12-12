

 export const generateRandomNumber = (min, max) => {
    // Generar un número aleatorio entre min y max (ambos inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };