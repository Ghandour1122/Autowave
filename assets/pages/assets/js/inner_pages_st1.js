$(function () {

    // ------------ team images width same height -----------
    // var images = $(".tc-pg-team-style1 .team-card .img, .img_sm_h");
    // images.each(function () {
    //   var width = $(this).width();
    //   $(this).height(width);
    // });


});


// ------------ swiper sliders -----------
$(document).ready(function () {

    // ------------ tc-pg-header-slider1 -----------
    var swiper = new Swiper('.about-pg-st1 .tc-pg-main-slider-st1 .imgs-slider', {
        slidesPerView: 1,
        spaceBetween: 80,
        centeredSlides: true,
        speed: 1500,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });

    var swiper = new Swiper('.about-pg-st1 .tc-pg-about-st1 .marq-slider', {
        slidesPerView: "auto",
        spaceBetween: 50,
        centeredSlides: true,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        speed: 30000,
        autoplay: {
            delay: 1,
        },
        loop: true,
    });

});



// ------------ gsap scripts -----------
$(function () {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // create the smooth scroller FIRST!
    const smoother = ScrollSmoother.create({
        content: "#scrollsmoother-container",
        smooth: 2,
        normalizeScroll: true,
        ignoreMobileResize: true,
        effects: true,
        //preventDefault: true,
        //ease: 'power4.out',
        //smoothTouch: 0.1, 
    });

    // smoother.effects("img", { speed: "auto" });

    let headings = gsap.utils.toArray(".js-title").reverse();
    headings.forEach((heading, i) => {
        let headingIndex = i + 1;
        let mySplitText = new SplitText(heading, { type: "chars" });
        let chars = mySplitText.chars;

        chars.forEach((char, i) => {
            smoother.effects(char, { lag: (i + headingIndex) * 0.1, speed: 1 });
        });
    });


    let splitTextLines = gsap.utils.toArray(".js-splittext-lines");

    splitTextLines.forEach(splitTextLine => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: splitTextLine,
                start: 'top 90%',
                duration: 2,
                end: 'bottom 60%',
                scrub: false,
                markers: false,
                toggleActions: 'play none none none'
                // toggleActions: 'play none play reset'
            }
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" })
        // tl.from(itemSplitted.lines, { y: 100, delay: 0.2, opacity: 0, stagger: 0.1, duration: 1, ease: 'inOut' });
        // tl.from(itemSplitted.lines, { y: 100, opacity: 0, stagger: 0.05, duration: 1, ease: 'back.inOut' });
        tl.from(itemSplitted.lines, { duration: 1, delay: 0.5, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
    });



    // ------ about pg animations ------

    // top slider 
    const tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-pg-st1 .tc-pg-main-slider-st1",
            start: "-600 top",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });
    tl1.to(".about-pg-st1 .tc-pg-main-slider-st1 .img img", {
        x: 0,
        y: 0,
        scale: 1.3,
        duration: 20,
        ease: "linear",
        delay: 1
    });


    // about section 
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-pg-st1 .tc-pg-about-st1",
            start: "-600 top",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });
    tl2.to(".about-pg-st1 .tc-pg-about-st1 .imgs .main-img", {
        x: 0,
        y: 100,
        scale: 1,
        duration: 20,
        ease: "linear",
        delay: 1
    });

    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-pg-st1 .tc-pg-about-st1",
            start: "-600 top",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });
    tl3.to(".about-pg-st1 .tc-pg-about-st1 .imgs .sub-img", {
        x: 0,
        y: -100,
        scale: 1,
        duration: 20,
        ease: "linear",
        delay: 1
    });


    // time cards 
    // const tl4 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".about-pg-st1 .tc-pg-timeline-st1 .time-card",
    //         start: "-600 top",
    //         // end: "bottom bottom",
    //         scrub: true // Smooth scrolling effect
    //     }
    // });
    // tl4.to(".about-pg-st1 .tc-pg-timeline-st1 .time-card .img img", {
    //     x: 0,
    //     y: 0,
    //     scale: 1.3,
    //     duration: 20,
    //     ease: "linear",
    //     delay: 1
    // });

    document.querySelectorAll('.about-pg-st1 .tc-pg-timeline-st1 .time-card').forEach((card) => {
        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: '-500 top', // Animation starts when the top of the time-card reaches the top of the viewport
                scrub: true // Smooth scrolling effect
            }
        });
    
        tl4.to(card.querySelector('.img img'), {
            x: 0,
            y: 0,
            scale: 1.5,
            duration: 20,
            ease: 'linear',
            delay: 1
        });
    });


    // ------ services details pg animations ------

    // main image 
    const tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".services-det-pg-st1 .main-img",
            start: "-600 top",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });
    tl5.to(".services-det-pg-st1 .main-img img", {
        x: 0,
        y: 0,
        scale: 1.5,
        duration: 20,
        ease: "linear",
        delay: 1
    });


    // video image 
    const tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: ".services-det-pg-st1 .vid-img",
            start: "-600 top",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });
    tl6.to(".services-det-pg-st1 .vid-img img", {
        x: 0,
        y: 0,
        scale: 1.5,
        duration: 20,
        ease: "linear",
        delay: 1
    });

});
