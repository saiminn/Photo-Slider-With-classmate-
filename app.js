

const carouselSlides = document.querySelector(".carousel-slides")
const carouselImage = document.querySelectorAll(".carousel-slides img")


const prevBtn = document.querySelector(".previous")
const nextBtn  = document.querySelector(".next ")

let counter = 1;
const size = carouselImage[0].clientWidth;
carouselSlides.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listener//
nextBtn.addEventListener("click",()=>{
    if(counter>= carouselImage.length -1) return;
    carouselSlides.style.transition = "transform 1s ease-in-out"
    counter++;
    carouselSlides.style.transform = 'translateX(' + (-size * counter) + 'px)';

    
});

prevBtn.addEventListener("click",()=>{
    if(counter <= 0) return;
    carouselSlides.style.transition = "transform 1s ease-in-out"
    counter--;
    carouselSlides.style.transform = 'translateX(' + (-size * counter) + 'px)';

    
});

carouselSlides.addEventListener("transitionend", ()=>{
    if(carouselImage[counter].id === "last-clone"){
        carouselSlides.style.transition = "none";
        counter = carouselImage.length-2;
        carouselSlides.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if(carouselImage[counter].id === "first-clone"){
        carouselSlides.style.transition = "none";
        counter = carouselImage.length - counter;
        carouselSlides.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    
        
});



