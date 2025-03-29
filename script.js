function text1Animation(){
    const images = [
    {
        url: "https://freakins.com/cdn/shop/files/09june2024_7062-Edit.jpg?v=1718117172&width=800",
        link: "https://freakins.com/products/white-korean-pant-add-new-title?_pos=15&_fid=42ed5a5d9&_ss=c?variant=44406746415265"
    },
    {
        url: "https://freakins.com/cdn/shop/files/16july_19794-Edit.jpg?v=1721391718&width=800",
        link: "https://freakins.com/products/curve-black-pleated-korean-pants?_pos=3&_fid=42ed5a5d9&_ss=c?variant=44507696267425"
    },
    {
        url: "https://freakins.com/cdn/shop/files/30aug_39684-Edit.jpg?v=1725547453&width=800",
        link: "https://freakins.com/products/navy-peony-pareo-korean-pants-curve"
    },
    {
        url: "https://freakins.com/cdn/shop/files/30aug_2__40071-Edit.jpg?v=1725526262&width=800",
        link: "https://freakins.com/products/chocolate-2-pleats-curve-korean-pants?_pos=28&_fid=536ecc9f6&_ss=c?variant=44598865002657"
    },
    {
        url: "https://freakins.com/cdn/shop/files/09june2024_7027-Edit_5833ede1-ad1d-4ff5-9c13-f4b4e03a964f.jpg?v=1719252306&width=800",
        link: "https://freakins.com/products/curve-dark-blue-denim-skorts?_pos=21&_fid=536ecc9f6&_ss=c&variant=44428795969697?variant=44428795969697"
    }
];

let currentIndex = 0;
const textElement = document.getElementById("text1");

// Function to change background image
function changeBackground() {
    textElement.style.backgroundImage = `url(${images[currentIndex].url})`;
}

// Change image every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    changeBackground();
}, 5000);

// Click event to redirect
textElement.addEventListener("click", () => {
    window.location.href = images[currentIndex].link;
});

// Initial setup
changeBackground();
}

function text2Animation(){
    const images = [
    {
        url: "https://freakins.com/cdn/shop/files/DSC08030_1411f6b1-7db5-484a-b5cc-25a8ee9480b2.jpg?v=1719254956&width=800",
        link: "https://freakins.com/products/denim-bustier-top?variant=42759787708577"
    },
    {
        url: "https://freakins.com/cdn/shop/files/SAR01633.jpg?v=1739604068&width=800",
        link: "https://freakins.com/products/curve-euphoria-denim-top?_pos=17&_fid=151ab4eb1&_ss=c&variant=51827370885484?variant=51827370885484"
    },
    {
        url: "https://freakins.com/cdn/shop/files/SAR04131.jpg?v=1734670653&width=800",
        link: "https://freakins.com/products/breezy-navy-striped-pullover?_pos=24&_fid=151ab4eb1&_ss=c&variant=51707020968300?variant=51707020968300"
    },
    {
        url: "https://freakins.com/cdn/shop/files/12july_18038-Edit.jpg?v=1721218163&width=800",
        link: "https://freakins.com/products/indigo-blue-bodysuit-tube-top?_pos=64&_fid=24b969351&_ss=c&variant=44503742644385?variant=44503742644385"
    },
    {
        url: "https://freakins.com/cdn/shop/files/DSC09231-Edit.jpg?v=1702758828&width=800",
        link: "https://freakins.com/products/mahogany-puff-sleeve-crop-top?_pos=108&_fid=5ce179b6c&_ss=c&variant=43565768868001?variant=43565768868001"
    }
];

let currentIndex = 0;
const textElement = document.getElementById("text2");

// Function to change background image
function changeBackground() {
    textElement.style.backgroundImage = `url(${images[currentIndex].url})`;
}

// Change image every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    changeBackground();
}, 4500);

// Click event to redirect
textElement.addEventListener("click", () => {
    window.location.href = images[currentIndex].link;
});

// Initial setup
changeBackground();
}

text1Animation()
text2Animation()


