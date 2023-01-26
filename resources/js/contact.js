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
    // console.log (formInfo);

    // recuperar la api para subir 
    fetch('https://jsonplaceholder.typicode.com/posts', {
         method: "POST", //este método se usa para subirlo a la api
         body: JSON.stringify(formInfo),
         headers: { "Content-Type": "application/json" }
     }) .then(response => {
         document.getElementById("alert").className = "submit";
         document.getElementById("alert").innerHTML ="Formulario enviado correctamente";
         // console.log (response.json());
         response.json();
        })
        .catch(error => {
         document.getElementById("alert").className = "error";
         document.getElementById("alert").innerHTML ="Opps! Hay algún error en el formulario";
        });
    return false;
} 



// https://my-json-server.typicode.com/typicode/demo/posts prueba realizada con la demo para ver que funcionará
