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
}, 750);

// Declaring a constant with the information of the URL provided in the excercise.
const url = "https://jsonplaceholder.typicode.com/posts";

// Creating function fot sing fetch to retrieve information as JSON format and using setTimeout().
// This is to later call it using setTimeout and have the code more readable.
function mostrarJson() {
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(json => console.log("Datos obtenidos de la API: ", json));
}

// Calling function applying timeout feature in to display the result with some delasy after the first message.
setTimeout(() => mostrarJson(), 3000);