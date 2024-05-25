document.addEventListener("DOMContentLoaded", function () {
    // Toggle mobile menu
    const mobileMenuToggle = document.getElementById('checkbox');

    const nav = document.querySelector('.nav');
    let isClicked = false;

    mobileMenuToggle.addEventListener('click', function () {
      nav.classList.toggle('show');
    });
    
    // Close mobile menu when scrolling
    window.addEventListener('scroll', function () {
      if (nav.classList.contains('show') && !isClicked) {
        
        isClicked = true;
        mobileMenuToggle.click();
        nav.classList.remove('show');
        setTimeout(function() {
          isClicked = false;
        }, 100); // Reset flag after a short delay
      }
    });  
  });

    const faqbtn = document.querySelectorAll(".fifthboxbtn");
    const faqpara = document.querySelectorAll(".fifthboxpara");

    faqbtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            if (faqpara[index].classList.contains("showpara")) {
                faqpara[index].classList.remove("showpara");
            } else {
                faqpara[index].classList.add("showpara");
            }
            console.log("clicked");
        });
    });
    const getStartedButton = document.getElementById("getStartedButton");

    getStartedButton.addEventListener("click", () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    });