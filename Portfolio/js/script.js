ScrollReveal({
     reset: true,
    distance:'80px',
    duration:2000,
    delay:200
    });
ScrollReveal().reveal('.home-content, .heading',{origin: 'top'});
ScrollReveal().reveal('.card-img, .services-card, .portfolio-card, .contact-card',{origin: 'bottom'});
ScrollReveal().reveal('.about-img, .home-content h1 ',{origin: 'left'});
ScrollReveal().reveal('.about p, .home-content p ',{origin: 'right'});


// =======================typed JS=================
// const typed = new Type('.multiple-text', {
//     Strings: ['Frontend Developer','YouTuber','Web Designer'],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true
// });

var typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer','YouTuber','Web Designer'],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true
});
const handleSubmit = (event) =>{
    event.preventDefault();
}