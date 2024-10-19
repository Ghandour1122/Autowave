$(function () {

    // ------------ team images width same height -----------
    // var images = $(".tc-team-style1 .team-card .img, .img_sm_h");
    // images.each(function () {
    //   var width = $(this).width();
    //   $(this).height(width);
    // });


    // toggle saerch 
    $(".search-form").hide();
    $(".search-icon").on("click", function(){
        $(this).find(".fa-search").toggleClass("fa-times");
        $(".search-form").fadeToggle();
    })
    

    // ----------- side menu -----------
    $(".side_menu_btn").on("click", function () {
        $(this).toggleClass("active");
        $(".side_menu4_overlay").toggleClass("show");
        $(".side_menu4_overlay2").toggleClass("show");
        $(".side_menu_style4").toggleClass("show");
    });

    $(".side_menu_style4 .clss").on("click", function () {
        $(".side_menu4_overlay").toggleClass("show");
        $(".side_menu4_overlay2").toggleClass("show");
        $(".side_menu_style4").toggleClass("show");
    });


});


// ------------ swiper sliders -----------
$(document).ready(function () {

    // ------------ tc-case-st2 -----------
    var swiper = new Swiper('.tc-case-st2 .case-slider', {
        spaceBetween: 100,
        centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 1,
            }
        }
    });


    // ------------ tc-case-st2 -----------
    var swiper = new Swiper('.tc-case-st2 .marq-text', {
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerView: "auto",
        speed: 100000,
        autoplay: {
            delay: 1,
        },
        loop: true,
    //   allowTouchMove: false,
        disableOnInteraction: true,
    });


    // ------------ tc-case-st2 -----------
    var swiper = new Swiper('.tc-testimonials-st2 .testimonials-slider', {
        spaceBetween: 80,
        speed: 1000,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });


    // ------------ logos-slider -----------
    var swiper = new Swiper('.tc-testimonials-st2 .logos-slider', {
        spaceBetween: 80,
        centeredSlides: true,
        slidesPerView: "auto",
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
    //   allowTouchMove: false,
        disableOnInteraction: true,
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

});

// ------------ counter for the users count ------------------
document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll(".counterup");

    // Function to start counting animation
    function animateCounter(counter) {
        let startNumber = parseFloat(counter.textContent);
        let endNumber = parseFloat(counter.getAttribute("data-final-number"));
        let duration = parseFloat(counter.getAttribute("data-duration")) * 1000; // Convert to milliseconds
        let increment = (endNumber - startNumber) / (duration / 50); // Adjust increment per step

        let currentNumber = startNumber;
        let timer = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= endNumber) {
                counter.textContent = endNumber;
                clearInterval(timer); // Stop the timer once endNumber is reached
            } else {
                counter.textContent = Math.round(currentNumber); // Display the incremented number
            }
        }, 50); // Update every 50ms for a smoother effect
    }

    // Function to reset counter (optional)
    function resetCounter(counter) {
        counter.textContent = 0;
    }

    // Intersection Observer to trigger the counter when it enters view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const counter = entry.target;

            if (entry.isIntersecting) {
                // Counter enters the viewport, start the animation
                animateCounter(counter);
            } else {
                // Optional: Reset counter when out of view
                resetCounter(counter);
            }
        });
    });

    // Observe all counter elements
    counters.forEach(counter => {
        observer.observe(counter);
    });
});


//---------------------------------- for the country code ----------------------------
// Reference the input fields
var input = document.querySelector("#phone");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");

// Initialize intl-tel-input for phone validation
var iti = window.intlTelInput(input, {
  initialCountry: "auto", // Automatically selects country
  geoIpLookup: function(callback) {
    fetch('https://ipinfo.io/json?token=fd9a0584561174', { headers: { 'Accept': 'application/json' } })
      .then(function(resp) { return resp.json(); })
      .then(function(resp) { callback(resp.country); })
      .catch(function() { callback('us'); });
  },
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // IMPORTANT for number formatting
});

// Listen for country changes to update the input with the country code
input.addEventListener('countrychange', function() {
  var dialCode = iti.getSelectedCountryData().dialCode; // Get the country dial code
  input.value = "+" + dialCode + " "; // Prepend country code to the input field
});

// Validate email format
function isValidEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
  return emailPattern.test(email);
}

// Handle form validation on submit button click
document.querySelector("#submitBtn").addEventListener("click", function(e) {
  e.preventDefault(); // Prevent the anchor tag from behaving like a link

  var name = nameInput.value.trim();
  var email = emailInput.value.trim();
  var phoneNumber = input.value.trim();

  // Validate name
  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  // Validate email
  if (email === "" || !isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Validate phone number
  if (!iti.isValidNumber()) {
    alert("Please enter a valid phone number.");
    return;
  }

  // All validations passed
  alert("Form is valid! Submitting...");

  // Proceed with form submission (replace with actual submission logic if needed)
  // For example, you could send the data via AJAX here
});


document.addEventListener("DOMContentLoaded", function() {
    // Wait for the Calendly widget to load before modifying the style
    var observer = new MutationObserver(function(mutationsList, observer) {
        // Find the element by its class name and modify its style
        var element = document.querySelector('.lmtWIHO_gkbTeeyuvoJC.mOUYF5ZmuNL6I7t0mSFg');
        if (element) {
            element.style.backgroundColor = 'transparent'; // Make background transparent
            observer.disconnect(); // Stop observing once the element is found and modified
        }
    });

    // Start observing the entire document for changes
    observer.observe(document.body, { childList: true, subtree: true });
});