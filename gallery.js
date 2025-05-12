const images = [
    {
        src: "images/photo-collage.png (3).png",
        alt: "Image 1",
        desc: "First image description"
    },
    {
        src: "images/photo-collage.png (3).png",
        alt: "Image 2",
        desc: "Second image description"
    },
    {
        src: "images/photo-collage.png (3).png",
        alt: "Image 3",
        desc: "Third image description"
    },
    {
        src: "images/photo-collage.png (3).png",
        alt: "Image 4",
        desc: "Fourth image description"
    }
];


const gallery = document.getElementById('lightgallery');
let galleryHTML = '';

images.forEach((image, index) => {
    galleryHTML += `
            <a href="${image.src}" data-sub-html="<h4>${image.alt}</h4><p>${image.desc}</p>">
                <img src="${image.src}" alt="${image.alt}" />
            </a>
        `;
});

gallery.innerHTML = galleryHTML;


lightGallery(document.getElementById("lightgallery"), {
    plugins: [lgZoom, lgThumbnail, lgFullscreen],
    speed: 500,
});