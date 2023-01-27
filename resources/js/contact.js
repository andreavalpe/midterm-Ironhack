/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */

function sendForm () {
    // console.log (titleProject.innerHTML);
    let fullName = document.getElementById("fullName");
    // console.log (fullName.value);
    let email = document.getElementById("email");
    // console.log (email.value);
    let phone = document.getElementById("phone");
    // console.log (phone.value);
    let message = document.getElementById("message");
    // console.log (message.value);

    let formInfo = {
        "fullName":fullName.value,
        "email":email.value,
        "phone":phone.value,
        "message": message.value,
    };

    let correctForm = true;
    for (let infoSend in formInfo) {
        if (!formInfo[infoSend]) {
            console.log (`Falta el ${infoSend} para introducir en el formulario`)
            correctForm = false;
        }
    }

    if (correctForm === true) {
        console.log (`Los datos introducidos en el formulario son correctos:
        Full Name: ${formInfo.fullName} 
        Email ${formInfo.email} 
        Phone ${formInfo.phone} 
        Message ${formInfo.message}`);
    };
        
    //volvemos a acceder a los elementos del html usando el Dom
    let form = document.getElementById("form");
//     //como queremos que el formulario tenga en cuenta todas sus casillas usaremos un condicional
    if (form.checkValidity()) {
//     // recuperar la api para subir 
//     //volvemos a usar el json como en project.js y index.js pero en este caso cambia a post porque estamos subiéndolo y no recuperándolo
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST", //este método se usa para subirlo a la api
            body: JSON.stringify(formInfo),
            headers: { "Content-Type": "application/json" }
        }) .then(response => {
            document.getElementById("alert").className = "submit";
            document.getElementById("alert").innerHTML ="Form submitted successfully";
//          // console.log (response.json());
            response.json();
        }) .catch(error => {
            document.getElementById("alert").className ="error";
            document.getElementById("alert").className ="Opps! There is an error in the form";
         });
     } else {
             document.getElementById("alert").className = "error";
             document.getElementById("alert").innerHTML ="Opps! There is an error in the form";
         }
    return false;
 }
// https://my-json-server.typicode.com/typicode/demo/posts prueba realizada con la demo para ver que funcionará
