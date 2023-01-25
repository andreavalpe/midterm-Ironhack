/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */

//llamará a la función cuando la web ya esté cargada
window.onload = function() {

//se guardan en la variable todos los parámetros que se le pasen por la url
    const params = new URLSearchParams(window.location.search);
    // console.log(params.get("param1")); 

//se guardan los parámetros recuperados con ese nombre
    let param1 = params.get ("param1");
    // console.log (param1);
    if (param1 === '' || param1 === null ) { //se hace un if por si el parámetro viniera vacío
        param1 = 1;
    }

//el fetch llama al api donde se recuperan los datos
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

//el switch servirá para tener la lista sin el parámetro que han enviado desde la url
    let projectList = [1,2,3,4];
    switch (param1) {
        case "1": 
            projectList = [2,3,4];
            break;
        case "2": 
            projectList = [1,3,4];
            break;
        case "3": 
            projectList = [1,2,4];
            break;
        case "4": 
            projectList = [1,2,3];
            break;
        default: 
            projectList =[1,2,3];
    } 
    // console.log (projectList);

//se recorre la lista para recuperar los objetos que devuelve el api
    for (let i = 0; i < projectList.length; i++ ) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${projectList[i]}`)
        .then(response => response.json()) 
        .then(json => { 
            let title = json.title 
            let body = json.body
            // console.log (title);
            // console.log (body);
        
//aquí volvemos a recuperar elementos usando el Dom y en este caso le decimos que tenga en cuenta la iteración 
//se utiliza el número que tiene el i para que coincida con la posición del id
        let titleZero = document.getElementById("title" + [i]);
        titleZero.innerHTML = title; 
        
        let bodyZero = document.getElementById("body" + [i]);
        bodyZero.innerHTML = body; 

        let button = document.getElementById("button" + [i]);

//se sustituye el onclick actual con uno nuevo usando la lista de la iteración 
        button.onclick = function () {
            location.href = `project.html?param1=${projectList[i]}`;
        };
        }
    )};

}

// se crea una función pasándole una url como parámetro y accedemos a la que hemos puesto en el onclick
function sectionProjects (url) {
    location.href = url;
}


