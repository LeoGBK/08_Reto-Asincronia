// Storing first line message into a string variable.
let mensaje = "Recuperando los datos de la API";

// Using proceess.stdout.write to avoid line jumping.
process.stdout.write(mensaje);

// Creating an animation to make the dots appear slowly next to the messaje using setInterval.
let cuenta = 0;
let intervalo = setInterval(() => {
    process.stdout.write("."); // Prints dots continuously.
    cuenta++;
    if (cuenta === 3) clearInterval(intervalo); // Stops after 3 dots.
}, 500);
