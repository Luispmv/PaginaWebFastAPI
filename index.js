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


