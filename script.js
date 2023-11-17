$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer",  "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


var nameError=document.getElementById('name-error');
var emailError=document.getElementById('email-error');
var subjectError=document.getElementById('subject-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('submit-error');

function validateName(){
    var name=document.getElementById('contact-name').value;
    if(name.length==0){
        nameError.innerHTML='Name is required'
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='Enter full first name and last name'
        return false;
    }
    nameError.innerHTML='<i class="fas fa-check-circle"></i>'
    return true;
}
function validateEmail(){
    var email=document.getElementById('email-address').value;
    if(!email.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        emailError.innerHTML='Enter valid mail'
        return false;
    }
    emailError.innerHTML='<i class="fas fa-check-circle"></i>'
    return true;
}
function validateSub(){
    var subject1=document.getElementById('subject').value;
    if(subject1.length<4){
        subjectError.innerHTML='Requires minimum 4 letters'
        return false;
    }
    subjectError.innerHTML='<i class="fas fa-check-circle"></i>'
    return true;
}
function validateMes(){
    var message1=document.getElementById('message').value;
    if(message1.length<4){
        messageError.innerHTML='Requires minimum 4 letters'
        return false;
    }
    messageError.innerHTML='<i class="fas fa-check-circle"></i>'
    return true;
}