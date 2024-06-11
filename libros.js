botontoggle = document.getElementById("toggleBtn")
        dropdown = document.querySelector(".hide")

        botontoggle.addEventListener("click", function(){
            dropdown.classList.toggle("hide");
})


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
                <img src="${libro.image}" alt="">
                <button>Ver libro</button>
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
            <span class="itemCategoria ${categoria.name}">${categoria.name}</span>
            `
        );

        const toggle = document.querySelector(".category-toggle");
        toggle.append(items);


        const itemEspecifico = toggle.querySelector(`.${categoria.name}`);
        
        // Agregar el event listener al nuevo span
        // itemEspecifico.addEventListener('click', () => {
        //     console.log(`${categoria.name} fue presionada`);
        //     librosPorCategoria(categoria.name, (data) => {
        //         console.log('Libros en la categoría:', categoria.name, data);

        //         //Template string con los elementos pertenencientes a una categoria especifica
        //         const itemsFiltro = document.createRange().createContextualFragment(
        //             `
        //             <div class="book-result-container">
        //                 <img src="${categoria.image}" alt="">
        //                 <button>PUTO</button>
        //             </div>
        //             `
        //         );
        //         const changeMain = document.querySelector("main")
        //         changeMain.append(itemsFiltro)
        //     });
        // });
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
                            <img src="${libro.image}" alt="${libro.title}">
                            <button>${libro.title}</button>
                        </div>
                        `
                    );
                    changeMain.append(itemsFiltro);
                });
            });
        });
    });
});

