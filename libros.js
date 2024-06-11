botontoggle = document.getElementById("toggleBtn")
        dropdown = document.querySelector(".hide")

        botontoggle.addEventListener("click", function(){
            dropdown.classList.toggle("hide");
})





//Funcion para obtener nuestros libros por categoria
function librosPorCategoria(categoria, done) {
    const results = fetch(`http://137.184.185.43/libros?category=${categoria}`);
    results
        .then(response => response.json())
        .then(data => {
            console.log(typeof(data));
            done(data);
        });
}

// Funcion para obtener todos los libros existentes en nuestro endpoint
function obteniendoLibros(done) {
    const results = fetch("http://137.184.185.43/libros/");
    results
        .then(response => response.json())
        .then(data => {
            console.log(typeof(data))
            done(data);
        });
}

//Funcion para obtener tdas las categorias existentes en nuestro endpoint
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


                <section class="info-book none">
                    <h2>${libro.title}</h2>
                    <div>
                        <span>Categoria: ${libro.category}</span>
                        <span>Año: ${libro.year}</span>
                        <span>Autor:  ${libro.author}</span>
                        <span>Paginas:  ${libro.num_pages}</span>
                    </div>
                </section>


                <img src="${libro.image}" alt="">
                <button>${libro.title}</button>
            </div>
            `
        );

        const main = document.querySelector("main"); 
        main.append(card_libros);
    });
    document.querySelectorAll(".book-result-container").forEach(containerBook => {
        const infoBook = containerBook.querySelector(".info-book");
        containerBook.addEventListener("mouseover", function() {
            infoBook.classList.remove("none");
        });

        containerBook.addEventListener("mouseout", function() {
            infoBook.classList.add("none");
        });
    });
});

listaCategorias(data => {
    data.forEach(categoria => {
        const items = document.createRange().createContextualFragment(
            `
            <span class="itemCategoria ${categoria.name}">${categoria.name}</span>
            `
        );

        const toggle = document.querySelector(".category-toggle");
        toggle.append(items);


        const itemEspecifico = toggle.querySelector(`.${categoria.name}`);
        
        itemEspecifico.addEventListener('click', () => {
            console.log(`${categoria.name} fue presionada`);
            librosPorCategoria(categoria.name, (data) => {
                console.log('Libros en la categoría:', categoria.name, data);

                // Limpiar el contenedor principal antes de agregar nuevos elementos
                const changeMain = document.querySelector("main");
                changeMain.innerHTML = '';

                // Iterar sobre los libros y agregar los elementos
                data.forEach(libro => {
                    const itemsFiltro = document.createRange().createContextualFragment(
                        `
                        <div class="book-result-container">


                            <section class="info-book none">
                                <h2>${libro.title}</h2>
                                <div>
                                    <span>Categoria:  ${libro.category}</span>
                                    <span>Año:  ${libro.year}</span>
                                    <span>Autor: ${libro.author}</span>
                                    <span>Paginas:  ${libro.num_pages}</span>
                                </div>
                            </section>


                            <img src="${libro.image}" alt="">
                            <button>${libro.title}</button>
                        </div>
                        `
                    );
                    changeMain.append(itemsFiltro);
                });

                document.querySelectorAll(".book-result-container").forEach(containerBook => {
                    const infoBook = containerBook.querySelector(".info-book");
                    containerBook.addEventListener("mouseover", function() {
                        infoBook.classList.remove("none");
                    });
            
                    containerBook.addEventListener("mouseout", function() {
                        infoBook.classList.add("none");
                    });
                });

            });
        });




    });
});




// containerBook = document.querySelector(".book-result-container")
// infobook = document.querySelector(".none")
// containerBook.addEventListener("click", function(){
//     infobook.classList.toggle("none");
// })