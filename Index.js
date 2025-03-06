      // Toggle Mobile Menu
      document.getElementById("menu-toggle").addEventListener("click", function () {
        document.getElementById("mobile-menu").classList.toggle("hidden");
    });

    //Slider Menu
    document.addEventListener("DOMContentLoaded", function () {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true, 
            autoplay: {
                delay: 2000, 
                disableOnInteraction: false
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                640: { slidesPerView: 1 }, // Phones
                768: { slidesPerView: 1 }, // Tablets
                1024: { slidesPerView: 2 }, // Laptops
            },
        });
    });


    //Branding Page Filtter button
    document.addEventListener("DOMContentLoaded", function () {
        const filterButtons = document.querySelectorAll(".filter-btn");
        const images = document.querySelectorAll(".image-item");
    
        filterButtons.forEach(button => {
            button.addEventListener("click", function () {
                const filterValue = this.getAttribute("data-filter");
    
                images.forEach(image => {
                    if (filterValue === "all" || image.getAttribute("data-category") === filterValue) {
                        image.style.display = "block";
                    } else {
                        image.style.display = "none";
                    }
                });
            });
        });
    });


    // Scroll Up  & Button
    const scrollBtn = document.getElementById("scrollBtn");

    // Check scroll position and update button direction
    function updateScrollButton() {
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10) {
            scrollBtn.innerHTML = "↑"; // Change to up arrow when at bottom
        } else {
            scrollBtn.innerHTML = "↓"; // Change to down arrow when at top
        }
    }

    window.addEventListener("scroll", updateScrollButton);
    updateScrollButton(); // Initial check

    // Scroll behavior on button click
    scrollBtn.addEventListener("click", () => {
        if (scrollBtn.innerHTML === "↓") {
            window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });



    // About Page counting
    document.addEventListener('DOMContentLoaded', () => {
        const counters = document.querySelectorAll('.counter');
        const speed = 150; // Adjusted for a smoother count (lower = faster)

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText.replace('+', '');
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment) + '+';
                    setTimeout(updateCount, 20); // Adjusted interval for smoother animation
                } else {
                    counter.innerText = target + '+';
                }
            };

            updateCount();
        });
    });