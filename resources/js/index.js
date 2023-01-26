/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */
// function  cambiarSeccion (){
//     fetch ("project.html")
//     .then (response => response.text ())
//     .then (data => {
//         document.getElementById ("section1").innerHTML= data; 
//     });
// }

function sectionProjects (url) {
location.href = url;
}

window.onload = function() {

let projectList = [1,2,3];

    for (let i = 0; i < projectList.length; i++ ) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${projectList[i]}`)
        .then(response => response.json()) 
        .then(json => { 
            let title = json.title 
            let body = json.body

        
        let titleZero = document.getElementById("title" + [i]);
        titleZero.innerHTML = title; 
        
        let bodyZero = document.getElementById("body" + [i]);
        bodyZero.innerHTML = body; 

        }
    )};
}
function sectionProjects (url) {
    location.href = url;
}
