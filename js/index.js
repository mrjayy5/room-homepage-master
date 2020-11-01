const   navOpenBtn      = document.querySelector('header > .nav-open'),
        navCloseBtn     = document.querySelector('header > nav > .nav-close'),
        nav             = document.querySelector('header > nav'),
        overlay         = document.querySelector('.overlay'),
        sliderNext      = document.querySelector('.hero__nav .next'),
        sliderPrev      = document.querySelector('.hero__nav .prev'),
        sliderImages    = document.querySelectorAll('.hero__image .hero--slider'),
        sliderHeading   = document.querySelector('.hero__content h1'),
        sliderContent   = document.querySelector('.hero__content p'),
        sliderContentC  = document.querySelector('.hero__content'),
        sliderNav       = document.querySelectorAll('.hero__nav');

navOpenBtn.addEventListener('click', () => {
    nav.classList.add('show');
    overlay.classList.add('active');
});
navCloseBtn.addEventListener('click', () => {
    nav.classList.remove('show');
    overlay.classList.remove('active');
});
overlay.addEventListener('click', () => {
    nav.classList.remove('show');
    overlay.classList.remove('active');
});

var currentSlide = 0;

const hideSlide = (currentSlide) => {
    sliderImages[currentSlide].classList.add('hidden');
    transition();
}

const showSlide = (currentSlide) => {
    sliderImages[currentSlide].classList.remove('hidden');
}

const transition = (currentSlide) => {
    sliderContentC.classList.add('hidden');
    setTimeout(() => {
        changeSlide(currentSlide);
    }, 500);
    setTimeout(() => {
        sliderContentC.classList.remove('hidden');
    }, 1000)
}

const changeSlide = (currentSlide) => {
    switch(currentSlide) {
        case 0:
            sliderHeading.innerText = "Discover innovative ways to decorate";
            sliderContent.innerText = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
            break;

        case 1:
            sliderHeading.innerText = "We are available all across the globe";
            sliderContent.innerText = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
            break;

        case 2:
            sliderHeading.innerText = "Manufactured with the best materials";
            sliderContent.innerText = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
            break;

    }
}

const nextSlide = () => {
    if(currentSlide >= sliderImages.length - 1) {
        hideSlide(currentSlide);
        currentSlide = 0;
        showSlide(currentSlide);
        transition(currentSlide);
    } else {
        hideSlide(currentSlide);
        currentSlide++;
        showSlide(currentSlide);
        transition(currentSlide);
    }
}

const prevSlide = () => {
    if(currentSlide === 0) {
        hideSlide(currentSlide);
        currentSlide = sliderImages.length -1;
        showSlide(currentSlide);
        transition(currentSlide);
    } else {
        hideSlide(currentSlide);
        currentSlide--;
        showSlide(currentSlide);
        transition(currentSlide);
    }
}

sliderNext.addEventListener('click', () => {
    nextSlide();
});

sliderPrev.addEventListener('click', () => {
    prevSlide();
});

document.addEventListener('keydown', (e) => {
    if( e.keyCode === 39 || e.keyCode === 38 ) { // 39 = right, 38 = up
        nextSlide();
    } else if ( e.keyCode === 37 || e.keyCode === 40 ) { // 37 = left, 40 = down
        prevSlide();
    }
})