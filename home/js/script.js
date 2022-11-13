const faders = document.querySelectorAll('.fade-in')


const appearOptions = {
    threshold: 1,
    rootMargin: '0px 0px -150px 0px'
}
const appearOnScroll = new IntersectionObserver(function(
    entries, appearOnScroll){
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return
            }else {
                entry.target.classList.add('appear')
                appearOnScroll.unobserve(entry.target)
            }
        }, appearOptions)
    })

    faders.forEach(fader => {
        appearOnScroll.observe(fader)
    })

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) =>{
            if(entry.isIntersecting) {
                entry.target.classList.add('show')
            }
        }, appearOptions)
    })



    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el) => observer.observe(el))
       
    $('.owl-one').owlCarousel({
        loop:true,
        margin:15,
        nav:false,
        stagePadding: 50,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
   
    $('.owl-two').owlCarousel({
        loop:true,
        margin:15,
        nav:false,
        autoplay: true,
        autoplayTimeout: 4000,
        stagePadding: 50,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1.5
            },
            1000:{
                items:2.5
            }
        }
    })

    ;(()=>{
        var lastPos = 0, scrollToPos = document.body.scrollHeight;
     
        scrollBtn.addEventListener("click", () => scrollTo(0, scrollToPos));
        addEventListener("scroll", () => {
            scrollToPos = scrollY > lastPos ?  0 : document.body.scrollHeight;
            lastPos = Math.max(0, scrollY);
            scrollBtn.classList.toggle("scrollUp", scrollToPos === 0);
        }, false);
     })();

     // When the user clicks on div, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");
  }

      // When the user clicks on div, open the popup
function myFunction2() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

        // When the user clicks on div, open the popup
function myFunction3() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show");
  }
  
     (function(){
        emailjs.init("vp-QhNnj30KQZEDXn");
     })();

     function sendmail() {
        let userEmail = document.getElementById("email").value;
        let userMessage = document.getElementById("message").value;
    
            var contactParams = {
                from_email: userEmail,
                message: userMessage
            };
    
            emailjs.send('service_bwcso6n', 'template_63sdojh', contactParams).then(function (res) {})
    }
    





