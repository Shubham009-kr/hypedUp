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

function text3Animation(){
    const images = [
    {
        url: "https://freakins.com/cdn/shop/files/Freakins15NOV1532.jpg?v=1732290612&width=800",
        link: "https://freakins.com/products/denim-bustier-top?variant=42759787708577"
    },
    {
        url: "https://freakins.com/cdn/shop/files/SAR03057.jpg?v=1733825567&width=800",
        link: "https://freakins.com/products/brawl-beige-mens-cargo-korean-pants?_pos=11&_fid=3dbf70829&_ss=c?variant=51712105152876"
    },
    {
        url: "https://freakins.com/cdn/shop/files/Freakins15NOV1447.jpg?v=1732290151&width=800",
        link: "https://freakins.com/products/regal-brown-mens-stylised-korean-pants?_pos=27&_fid=3dbf70829&_ss=c&variant=51689140355436?variant=51689140355436"
    },
    {
        url: "https://freakins.com/cdn/shop/files/1stMarchFreakinsECOM2997_9e68a26c-25e1-4a73-8afd-4a58771a2ba5.jpg?v=1742364459&width=800",
        link: "https://freakins.com/products/ecru-distressed-mens-straight-jeans-optical?_pos=28&_fid=ef9fac605&_ss=c&variant=51866920911212?variant=51866920911212"
    },
    {
        url: "https://freakins.com/cdn/shop/files/16july_19443-Edit-2_3e02e4d9-bd33-43d1-9654-cf7133e9daea.jpg?v=1721356759&width=800",
        link: "https://freakins.com/products/dust-storm-straight-fit-jeans?variant=44491298570401"
    }
];

let currentIndex = 0;
const textElement = document.getElementById("text3");

// Function to change background image
function changeBackground() {
    textElement.style.backgroundImage = `url(${images[currentIndex].url})`;
}

// Change image every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    changeBackground();
}, 4000);

// Click event to redirect
textElement.addEventListener("click", () => {
    window.location.href = images[currentIndex].link;
});

// Initial setup
changeBackground();
}

function text4Animation(){
    const images = [
    {
        url: "https://freakins.com/cdn/shop/files/22April_3809-Edit.jpg?v=1713990446&width=800",
        link: "https://freakins.com/products/denim-bustier-top?variant=42759787708577"
    },
    {
        url: "https://freakins.com/cdn/shop/files/21MAY01871-Edit.jpg?v=1716528575&width=800",
        link: "https://freakins.com/products/tropical-mesh-shirt?_pos=39&_fid=3fcd3bc38&_ss=c&variant=44331692851361?variant=44331692851361"
    },
    {
        url: "https://freakins.com/cdn/shop/files/21MAY0371-Edit.jpg?v=1716528582&width=800",
        link: "https://freakins.com/products/basic-camo-mesh-shirt?_pos=60&_fid=3fcd3bc38&_ss=c&variant=44331896373409?variant=44331896373409"
    },
    {
        url: "https://freakins.com/cdn/shop/files/1stMarchFreakinsECOM3603.jpg?v=1741256860&width=800",
        link: "https://freakins.com/products/white-ripped-mens-jeans-optical?variant=51866924351852"
    },
    {
        url: "https://freakins.com/cdn/shop/files/Freakins15NOV0962.jpg?v=1732290913&width=800",
        link: "https://freakins.com/products/icy-blue-mens-baggy-fit-jeans?_pos=8&_fid=c546eff98&_ss=c?variant=51687311212908"
    }
];

let currentIndex = 0;
const textElement = document.getElementById("text4");

// Function to change background image
function changeBackground() {
    textElement.style.backgroundImage = `url(${images[currentIndex].url})`;
}

// Change image every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    changeBackground();
}, 4750);

// Click event to redirect
textElement.addEventListener("click", () => {
    window.location.href = images[currentIndex].link;
});

// Initial setup
changeBackground();
}

text1Animation()
text2Animation()
text3Animation()
text4Animation()


