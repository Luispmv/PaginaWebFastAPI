botontoggle = document.getElementById("toggleBtn")
        dropdown = document.querySelector(".hide")

        botontoggle.addEventListener("click", function(){
            dropdown.classList.toggle("hide");
})


function obteniendoCategorias(done){
    const results = fetch("http://137.184.185.43/categorias")
    results
        .then(response => response.json())
        .then(data => {
            done(data)
        })
}

obteniendoCategorias(data =>{
    console.log(data)
})

// function obteniendoCategorias(done){
//     fetch("http://137.184.185.43/categorias", { mode: 'no-cors' })
//         .then(response => {
//             // La respuesta estará limitada en este modo
//             if (!response.ok) {
//                 throw new Error(`Network response was not ok: ${response.statusText}`);
//             }
//             return response.json();
//         })
//         .then(data => {
//             done(data);
//         })
//         .catch(error => {
//             console.error('There has been a problem with your fetch operation:', error);
//         });
// }

obteniendoCategorias(data => {
    console.log(data);
});

