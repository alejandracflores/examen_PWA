// DOM
document.addEventListener('DOMContentLoaded', () => {
    // Acceder al div de gallery
    const gallery = document.getElementById('gallery');
    // Fetch a gallery de fotos del API
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then(photos =>  {
            // Acceder al arreglo de fotos
            photos.forEach(photo => {
                // Div por foto
                const photoOfGallery = document.createElement('div');
                // Información de la foto y link para abrirla
                photoOfGallery.innerHTML = `
                    <a href="${photo.url}" target="_blank">
                        <img src="${photo.thumbnailUrl}" alt="${photo.title}">
                    </a>
                    <p>${photo.title}</p>
                `;
                // Se añade el elemento div a gallery
                gallery.appendChild(photoOfGallery);
            });
        })
        // En caso de error
        .catch((error) => console.log(error));
});