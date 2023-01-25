/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */

//llamará a la función cuando la web ya esté cargada
window.onload = function() {

//se guarda en la variable todos los parámetros que se le pasen por la url
    const params = new URLSearchParams(window.location.search);
    // console.log(params.get("param1")); 

//se guarda los parámetros recuperados con ese nombre
    let param1 = params.get ("param1");
    console.log (param1);

//llama al api donde se recuperan los datos
    fetch(`https://jsonplaceholder.typicode.com/posts/${param1}`)
        .then(response => response.json()) //estructura del json. Lo que recupera del fetch lo mete en response y eso lo convierte en json y esto lo envía al siguiente then
        .then(json => { //recibe el valor llamado json del then anterior y se usa para recuperar ciertos datos del objeto
            let title = json.title //
            let body = json.body
            // console.log (text);
            // console.log (title);

//se accede a la posición del html siguiendo su id y se guarda en una variable
            let titleProject = document.getElementById("changingTitleProjects");
            // console.log (titleProject.innerHTML);
            titleProject.innerHTML = title; // se usa la variable titleProject y se recupera el texto mediante el innerHTML y se cambia por la variable guardada title

            let bodyProject = document.getElementById("changingTextProjects");
            // console.log (titleProject.innerHTML);
            bodyProject.innerHTML = body;
    });
}