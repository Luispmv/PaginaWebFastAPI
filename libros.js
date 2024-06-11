botontoggle = document.getElementById("toggleBtn")
        dropdown = document.querySelector(".hide")

        botontoggle.addEventListener("click", function(){
            dropdown.classList.toggle("hide");
})


function obteniendoLibros(done) {
    const results = fetch("http://137.184.185.43/libros/");
    results
        .then(response => response.json())
        .then(data => {
            console.log(typeof(data))
            done(data);
        });
}

function listaCategorias(done){
    const results = fetch("http://137.184.185.43/categorias");
    results
        .then(response => response.json())
        .then(data => {
            console.log(typeof(data))
            done(data);
        });
}

obteniendoLibros(data => {
    data.forEach(libro => {
        const card_libros = document.createRange().createContextualFragment(
            `
            <div class="book-result-container">
                <img src="${libro.image}" alt="">
                <button onclick="window.location.href='./vistaLibro.html'">Ver libro</button>
            </div>
            `
        );

        const main = document.querySelector("main"); 
        main.append(card_libros);
    });
});

listaCategorias(data => {
    data.forEach(categoria => {
        const items = document.createRange().createContextualFragment(
            `
            <span class="itemCategoria">${categoria.name}</span>
            `
        );

        const toggle = document.querySelector(".category-toggle");
        toggle.append(items);
    });
});
