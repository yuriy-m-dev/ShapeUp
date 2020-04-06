$(function() {
    $('.about__slider').slick({
        arrows: false,
        asNavFor: '.about__nav-slider',
        fade: true
    });
    $('.about__nav-slider').slick({
        arrows: false,
        slidesToShow: 3,
        asNavFor: '.about__slider',
        focusOnSelect: true,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                variableWidth: false,
              }
            },
          ]
    });

    $('.reviews__rate').rateYo({
        ratedFill: "#db0127",
        starWidth: "14px",
        rating: "60%",
        spacing: "6px",
        fullStar: true
    });

    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true
                }
            }
        ]
    });

    $('.price__slider').slick({
        centerMode: true,
        variableWidth: true,
        prevArrow: '<img class="price-arrow price-arrow-prev" src="images/left-arrow.png">',
        nextArrow: '<img class="price-arrow price-arrow-next" src="images/right-arrow.png">',
        autoplay: true,
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    variableWidth: false,
                    centerMode: false
                }
            }
        ]
    })

    const header = document.querySelector('.header-top');
    window.onscroll = () => {
        if(window.pageYOffset > 100) {
            header.classList.add('active')
        } else {
            header.classList.remove('active')
        }
    }

    /*--------- Start Burger ------------*/

    const burger = document.querySelector('.header__burger'),
          mobileBtn = document.querySelector('.header__nav'),
          mobileBtnClose = document.querySelector('.header__nav-close'),
          menuLinks = document.querySelectorAll('.header__nav-link');

    burger.addEventListener('click', () => {
        mobileBtn.classList.add('active');
    });

    mobileBtnClose.addEventListener('click', () => {
        mobileBtn.classList.remove('active');
    });

    if(window.innerWidth <= 900) {
        for(let i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', () => {
                mobileBtn.classList.remove('active');
            });
        }
    }

    /*---------- End Burger -------------*/

    // Scroll to anchors
    (function () {

        const smoothScroll = function (targetEl, duration) {
            const headerElHeight =  document.querySelector('.header-top').clientHeight;
            let target = document.querySelector(targetEl);
            let targetPosition = target.getBoundingClientRect().top - headerElHeight;
            let startPosition = window.pageYOffset;
            let startTime = null;
        
            const ease = function(t,b,c,d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            };
        
            const animation = function(currentTime){
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startPosition, targetPosition, duration);
                window.scrollTo(0,run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            };
            requestAnimationFrame(animation);

        };

        const scrollTo = function () {
            const links = document.querySelectorAll('.js-scroll');
            links.forEach(each => {
                each.addEventListener('click', function () {
                    const currentTarget = this.getAttribute('href');
                    smoothScroll(currentTarget, 1000);
                });
            });
        };
        scrollTo();
    }());

});