function obteniendoLibros(done) {
    const results = fetch("http://137.184.185.43/libros/5");
    results
        .then(response => response.json())
        .then(data => {
            console.log(typeof(data))
            done(data);
        });
}

obteniendoLibros(libro => {
    const libro_view = document.createRange().createContextualFragment(
        `
        <div class="book-info-container">
        <figure>
            <img src="${libro.image}" alt="">
            <span>${libro.id}</span>
        </figure>
        <section>
            <header>
                <h1>${libro.title}</h1>
            </header>
            <footer>
                <span>${libro.category}</span>
                <span>${libro.year}</span>
                <span>${libro.author}</span>
                <span>${libro.num_pages}</span>
            </footer>
        </section>
        </div>
        `
    );

    const main = document.querySelector("main"); 
    main.append(libro_view);
});
