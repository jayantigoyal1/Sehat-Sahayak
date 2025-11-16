document.addEventListener("DOMContentLoaded", () => {
    
    const slidesContainer = document.querySelector("#featured-doctors .slides");
    
    if (!slidesContainer) {
        return; 
    }

    const nextButton = document.querySelector("#featured-doctors .next");
    const prevButton = document.querySelector("#featured-doctors .prev");
    
    const firstSlide = document.querySelector("#featured-doctors .items");
    
    const slideStyle = window.getComputedStyle(firstSlide);
    const slideMarginRight = parseInt(slideStyle.marginRight, 10);
    
    const slideWidth = firstSlide.offsetWidth + slideMarginRight;

    nextButton.addEventListener("click", () => {
        slidesContainer.parentElement.scrollBy({
            left: slideWidth,
            behavior: "smooth"
        });
    });

    prevButton.addEventListener("click", () => {
        slidesContainer.parentElement.scrollBy({
            left: -slideWidth,
            behavior: "smooth"
        });
    });

});