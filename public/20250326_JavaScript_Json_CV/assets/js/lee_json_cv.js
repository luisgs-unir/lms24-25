
const miCV = {
    "nombre": "Luis García", 
    "edad": 45, 
    "profesion": "Profe de LMS", 
    "email": "luis@micorreo.com", 
    "experiencias": [
        {
            "empresa": "UNIR", 
            "puesto": "profesor", 
            "años": 2, 
            "periodo": "2018 - 2020"
        }, 
        {
            "empresa": "Mercadona",
            "puesto":"reponedor",
            "años": 10
        }, 
        {
            "empresa": "Bankia",
            "puesto": "Analista",
            "años": 2026
        }
    ],
    "titulaciones": [
        {
            "titulo": "DAM", 
            "centro": "UNIR FP", 
            "año_finalización": 2026
        }
    ]
}

// Para el próximo día

// fetch('assets/doc/mi_cv.json').then(response => {
//     if(!response => )
// })


// Empezamos a mostrar la información general
const infoDiv = document.querySelector("#info");
infoDiv.innerHTML = `<p>Nombre: ${miCV.nombre}</p>
                     <p>Edad: ${miCV.edad}</p>
                     <p>Profesion: ${miCV.profesion}</p>
                     <p>Email: ${miCV.email}</p>`;

// Mostramos experiencia laboral
const experienciaUL = document.querySelector("#experiencia");

miCV.experiencias.forEach( exp => {
    
    // creamos un nuevo elemento dentro del documento
    const listItem = document.createElement("li");
    
    // aplicamos contenido (texto) al li
    listItem.textContent = `${exp.puesto} en ${exp.empresa} durante ${exp.años} años`; 

    // añadimos el li a experienciaUL 
    experienciaUL.appendChild(listItem);
})

