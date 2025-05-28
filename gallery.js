const images = [
    {
        src: "images/gallery_images/mr_farmer_program1.jpg",
        alt: "Image 1",
        desc: "Mr. Farmer"
    }, {
        src: "images/gallery_images/mr_farmer_program2.jpg",
        alt: "Image 2",
        desc: "Mr. Farmer"
    },
    {
        src: "images/gallery_images/mr_farmer_program3.jpg",
        alt: "Image 3",
        desc: "Mr. Farmer"
    },

    {
        src: "images/gallery_images/mr_farmer_program4.jpg",
        alt: "Image 4",
        desc: "Mr. Farmer"
    },

    {
        src: "images/gallery_images/mr_farmer_program5.jpg",
        alt: "Image 5",
        desc: "Mr. Farmer"
    },

    {
        src: "images/gallery_images/mr_farmer_program6.jpg",
        alt: "Image 6",
        desc: "Mr. Farmer"
    },

    {
        src: "images/gallery_images/mr_farmer_program7.jpg",
        alt: "Image 7",
        desc: "Mr. Farmer"
    },

    {
        src: "images/gallery_images/mr_farmer_program8.jpg",
        alt: "Image 8",
        desc: "Mr. Farmer"
    },

    {
        src: "images/gallery_images/mr_farmer_program9.jpg",
        alt: "Image 9",
        desc: "Mr. Farmer"
    },
    {
        src: "images/gallery_images/mr_farmer_program10.jpg",
        alt: "Image 10",
        desc: "Mr. Farmer"
    },
    {
        src: "images/gallery_images/mr_farmer_program11.png",
        alt: "Image 11",
        desc: "Mr. Farmer"
    },
    {
        src: "images/gallery_images/mr_farmer_program12.png",
        alt: "Image 12",
        desc: "Mr. Farmer"
    },
    {
        src: "images/gallery_images/mr_farmer_program13.png",
        alt: "Image 13",
        desc: "Mr. Farmer"
    },
    {
        src: "images/gallery_images/mr_farmer_program14.jpg",
        alt: "Image 14",
        desc: "Mr. Farmer"
    },
    {
        src: "images/gallery_images/mr_farmer_program15.png",
        alt: "Image 15",
        desc: "Mr. Farmer"
    },
    {
        src: "images/gallery_images/mr_farmer_program16.jpg",
        alt: "Image 16",
        desc: "Mr. Farmer"
    },
    {
        src: "images/gallery_images/mr_farmer_program17.jpg",
        alt: "Image 17",
        desc: "Mr. Farmer"
    },
     {
        src: "images/gallery_images/mr_farmer_program18.jpg",
        alt: "Image 18",
        desc: "Mr. Farmer"
    },
     {
        src: "images/gallery_images/mr_farmer_program19.jpg",
        alt: "Image 19",
        desc: "Mr. Farmer"
    },
     {
        src: "images/gallery_images/mr_farmer_program20.jpg",
        alt: "Image 20",
        desc: "Mr. Farmer"
    },
     {
        src: "images/gallery_images/mr_farmer_program21.jpg",
        alt: "Image 21",
        desc: "Mr. Farmer"
    },
    
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