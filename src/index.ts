import { getEnvVariables, main } from "./carreras-bot";

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

}, 1000 * 60 * 15); // Ejecutar cada 5 minutos