$( function() {

    var wind = $(window);

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: false,
        live: false
    });
    wow.init();

    // ---------- background change -----------
    var pageSection = $(".bg-img");
    pageSection.each(function (indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    // demos dropdown toggle show
    $(".demos-dropdown-toggle , .demos-dropdown").on("mouseenter", function(){
        $(this).parent().find(".demos-dropdown").addClass("show");
    })
    $(".demos-dropdown-toggle , .demos-dropdown").on("mouseleave", function(){
        $(this).parent().find(".demos-dropdown").removeClass("show");
    })

    // ---------- links transition -----------
    var links = document.querySelectorAll('.fade-link');

    // Attach click event listener to each link
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default navigation behavior

        // Fade out the body
        document.body.style.opacity = 0;

        // Wait for the transition to complete
        document.body.addEventListener('transitionend', function() {
          // Load the new page after the fade-out effect
          window.location.href = event.target.href;
        }, { once: true });
      });
    });


    // ---------- to top -----------

    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            toTop = $("#to_top")

        if (bodyScroll > 700) {

            toTop.addClass("show");

        } else {

            toTop.removeClass("show");
        }
    });

    $('#to_top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 0);
        return false;
    });

    // -------- counter --------
    $('.counter').countUp({
        delay: 10,
        time: 2000
    });


     /* ==  float_box_container button  == */
    $( ".float_box_container" ).mousemove(function(e) {
        var parentOffset = $(this).offset(); 
        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(".float_box").css({"left": relX, "top": relY });
        $(".float_box").addClass("show");
    });
    $( ".float_box_container" ).mouseleave(function(e) {
        $(".float_box").removeClass("show");
    });

    // -------- fav-btn --------
    $(".fav-btn").on("click", function(){
        $(this).toggleClass("active");
    })

    // -------- cls --------
    $(".cls").on("click", function(){
        $(this).parent().fadeOut();
    })

    // ------------ working in desktop -----------
    if ($(window).width() > 991) {
        $('.parallaxie').parallaxie({
        });
    }

    // ---------- tooltip -----------
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })
        
});

// -------- parralax img mouse move -------
$(function () {
    
    var b = document.getElementsByTagName("body")[0];  

    b.addEventListener("mousemove", function(event) {
    parallaxed(event);

    });

    function parallaxed(e) {
        var amountMovedX = (e.clientX * -0.3 / 8);
        var amountMovedY = (e.clientY * -0.3 / 8);
        var x = document.getElementsByClassName("parallaxed");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
        }
    }
});



// ------------ Preloader -----------
$(function() {
    const svg = document.getElementById("svg");
    const tl = gsap.timeline();
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
        delay: 1.5,
        y: -100,
        opacity: 0,
    });
    tl.to("#scrollsmoother-container", {
        className: "-=hidden-content",
        duration: 0,
    });
    tl.to(svg, {
        duration: 0.5,
        attr: { d: curve },
        ease: "power2.easeIn",
    }).to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: "power2.easeOut",
    });
    tl.to(".loader-wrap", {
        y: -1500,
    });
    tl.to(".loader-wrap", {
        zIndex: -1,
        display: "none",
    });
    tl.from(
        "header",
        {
            y: 200,
        },
        "-=1.5"
    );
    tl.from(
        "header .container",
        {
            y: 40,
            opacity: 0,
            delay: 0.3,
        },
        "-=1.5"
    );
    
});



$(window).on("load", function () {

    // ------------ Preloader -----------
    var body = $('body');
    body.addClass('loaded');
    setTimeout(function () {
        body.removeClass('loaded');
    }, 1500);

});

      // ------------ mousecursor scripts -----------
    $( function() {
        function mousecursor() {
            if ($("body")) {
                const e = document.querySelector(".cursor-inner"),
                    t = document.querySelector(".cursor-outer");
                let n, i = 0,
                    o = !1;
                window.onmousemove = function (s) {
                    o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
                },
                $("body").on("mouseenter", "a, .cursor-pointer", function () {
                    e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
                })
                , $("body").on("mouseleave", "a, .cursor-pointer", function () {
                    e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover")
                }),

                    // $("body").on("mouseenter", ".swiper-wrapper.curs-scroll", function () {
                    //     e.classList.add("cursor-scroll"), t.classList.add("cursor-scroll")
                    // }), $("body").on("mouseleave", ".swiper-wrapper.curs-scroll", function () {
                    //     $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-scroll"), t.classList.remove("cursor-scroll"))
                    // }),

                    e.style.visibility = "visible", t.style.visibility = "visible"
            }
        };

        $(function () {
            mousecursor();
        });

    });




    // ------------ gsap scripts -----------
    $(function () {
        // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        // ------ demos dropdown cards effect ------
        const tl400 = gsap.timeline();

        tl400.to(".demos-dropdown .demo-card", {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            delay: 0.3,
            stagger: {
                amount: 0.5,
                from: "start"
            }
        });

        
        const demosDropdownToggleList = document.querySelectorAll(".demos-dropdown-toggle");
        const demosDropdownList = document.querySelectorAll(".demos-dropdown");

        demosDropdownToggleList.forEach(function(demosDropdownToggle) {
            demosDropdownToggle.addEventListener("mouseenter", function() {
                tl400.restart();
            });

            demosDropdownToggle.addEventListener("mouseleave", function() {
                tl400.reverse();
            });
        });

        demosDropdownList.forEach(function(demosDropdown) {
            demosDropdown.addEventListener("mouseenter", function() {
                tl400.play();
            });

            demosDropdown.addEventListener("mouseleave", function() {
                tl400.reverse();
            });
        });

        if (typeof gsap !== 'undefined') {
            // Your GSAP code here
            gsap.to(".element", {duration: 2, x: 100});
        } else {
            console.error("GSAP is not defined");
        }

    });





