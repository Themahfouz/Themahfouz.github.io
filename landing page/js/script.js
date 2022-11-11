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
        // autoplay: true,
        // autoplayTimeout: 4000,
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
        let fullName = document.getElementById("name").value;
        let userEmail = document.getElementById("email").value;
        let userMessage = document.getElementById("message").value;
    
            var contactParams = {
                from_name: fullName,
                from_email: userEmail,
                message: userMessage
            };
    
            emailjs.send('service_bwcso6n', 'template_63sdojh', contactParams).then(function (res) {})
    }
    








































    //     // Get the button
// let mybuttonUp = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybuttonUp.style.display = "block";
//   } else {
//     mybuttonUp.style.display = "none";
//   }
// }


// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

































    // <!--Add pre compiled library files -->
    //     <!--Automatics css and js adder-->
    //     <!--auto compiled css & Js-->
    //     <script type="text/javascript" 
    //             src="//code.jquery.com/jquery-1.9.1.js">
    //   </script>
    //     <link rel="stylesheet" 
    //           type="text/css" 
    //           href="/css/result-light.css">
    //     <script type="text/javascript" 
    //             src=
    // "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js">
    //   </script>
    //     <link rel="stylesheet" 
    //           type="text/css" 
    //           href=
    // "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
    //     <link rel="stylesheet" 
    //           type="text/css" 
    //           href=
    // "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"></link>
    // container class for bootstrap card
    //         <div class="containers">
    //             <!-- bootstrap card with row name myCarousel as row 1-->
    //             <div class="carousel slide" id="myCarousel">
    //                 <div class="carousel-inner">
    //                     <div class="item active">
    //                         <div class="col-xs-2">
    //                             <a href="#">
    //                               <img src="img/img1.jpg"
    //                                 class="img-responsive">
    //                           </a>
    //                         </div>
    //                     </div>
    //                     <div class="item">
    //                         <div class="col-xs-2">
    //                             <a href="#">
    //                                 <img src="img/img2.jpg"
    //                                 class="img-responsive">
    //                           </a>
    //                         </div>
    //                     </div>
    //                     <div class="item">
    //                         <div class="col-xs-2">
    //                             <a href="#">
    //                               <img src= "img/img3.jpg"
    //                                 class="img-responsive">
    //                           </a>
    //                         </div>
    //                     </div>
    //                     <div class="item">
    //                         <div class="col-xs-2">
    //                             <a href="#">
    //                               <img src= "img/img4.jpg"
    //                                 class="img-responsive">
    //                           </a>
    //                         </div>
    //                     </div>
    //                 </div> <a class="left carousel-control"
    //                           href="#myCarousel"
    //                           data-slide="prev">
    //               <i class="glyphicon glyphicon-chevron-left">
    //               </i>
    //               </a>
    //                 <a class="right carousel-control" 
    //                    href="#myCarousel" 
    //                    data-slide="next">
    //                   <i class="glyphicon glyphicon-chevron-right">
    //                   </i>
    //               </a>
    //             </div>
    //          </div> 
    
    
    
    // $(window).load(function() {
    //        $(".carousel .item").each(function() {
    //            var i = $(this).next();
    //            i.length || (i = $(this).siblings(":first")),
    //              i.children(":first-child").clone().appendTo($(this));
               
    //            for (var n = 0; n < 4; n++)(i = i.next()).length ||
    //              (i = $(this).siblings(":first")),
    //              i.children(":first-child").clone().appendTo($(this))
    //        })
    //    });