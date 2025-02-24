import { getEnvVariables, main } from "./carreras-bot";

const MINUTES = Number(process.env.MINUTES) || 15
const  FRECUENCY = 1000 * 60 * MINUTES; // 15 minutos
console.log("FRECUENCY", FRECUENCY, MINUTES);
//validar si existen las variables necesarias
getEnvVariables();

// main().catch(error => {
//     console.error('❌ Error en la ejecución principal:', error);
//     process.exit(1);
// });


console.log("🚀 Iniciando el bot de carreras");
setInterval(() => {
    // Ejecutar el script

    main().catch(error => {
        console.error('❌ Error en la ejecución principal:', error);
        process.exit(1);
    });

}, FRECUENCY); // Ejecutar cada 5 minutos