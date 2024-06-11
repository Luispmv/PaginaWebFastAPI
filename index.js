botontoggle = document.getElementById("toggleBtn")
        dropdown = document.querySelector(".hide")

        botontoggle.addEventListener("click", function(){
            dropdown.classList.toggle("hide");
})


function obteniendoCategorias(done) {
    const results = fetch("http://137.184.185.43/categorias");
    results
        .then(response => response.json())
        .then(data => {
            console.log(typeof(data))
            done(data);
        });
}

obteniendoCategorias(data => {
    data.forEach(categoria => {
        const card_categories = document.createRange().createContextualFragment(
            `
            <button class="card-categories">
                <img src="${categoria.image}" alt="">
                <p>${categoria.name}</p>
            </button>
            `
        );

        const categorias = document.querySelector(".categorias-grid"); // Cambiado de "categorias-grid" a ".categorias-grid"
        categorias.append(card_categories);
    });
});






