let main_section = document.querySelector(".main-section");
let about_section = document.querySelector(".about-section")
let servics_section = document.querySelector(".servics-section");
let section_contact = document.querySelector(".section-contact");
let Portfolio_section = document.querySelector(".Portfolio-section");
  
document.querySelector(".home_link").addEventListener("click" ,()=>{
main_section.scrollIntoView({behavior : "smooth"});
});
document.querySelector(".about_link").addEventListener("click" ,()=>{
    about_section.scrollIntoView({behavior : "smooth"});
});
 document.querySelector(".services_link").addEventListener("click" ,()=>{
    servics_section.scrollIntoView({behavior : "smooth"});
 });
document.querySelector(".concat_link").addEventListener("click" ,()=>{
    section_contact.scrollIntoView({behavior : "smooth"});
});
 document.querySelector(".plotfolieo_link").addEventListener("click" ,()=>{
    Portfolio_section.scrollIntoView({behavior : "smooth"});
 });


  AOS.init({
    easing: 'ease-in-out',
    duration: 700,
});

// <=====preloader====>
let preloader = document.querySelector(".loder")

function myloader(){
  setInterval(function () {
    preloader.style.display ="none";

  }, 1500);
}

// <=====Response navvar====>
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const toggleNavbar = () => {
    nav_header.classList.toggle("active")
};


// <==========
// sticky navvar
// ==============>


mobile_nav.addEventListener('click', () => toggleNavbar())

const nav = document.querySelector('header')
window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 550) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky")
    }
})

// <=====ore swiper section====>
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.6,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



// <=====ore animation numbers section====>
const worksection = document.querySelector('.skil-img')
const workobserver = new IntersectionObserver(
    (entries, observer) => {
        const ent = entries[0];
        // consol.log(ent)
        if (ent.isIntersecting == false)
            return;

        const counterNum = document.querySelectorAll(".counter-number");
        const speed = 100;

        counterNum.forEach(curElem => {
            const updateNumber = () => {
                const targrtNumber = parseInt(curElem.dataset.number);

                const intialNum = parseInt(curElem.innerText);

                const incrementNumber = Math.trunc(targrtNumber / speed)
                // console.log(incrementNumber)
                if (intialNum < targrtNumber) {
                    curElem.innerText = intialNum + incrementNumber + "+";
                    setTimeout(updateNumber, 30);
                }
            };
            updateNumber();
        });
        observer.unobserve(worksection)
    }, {
    root: null,
    threshold: 0,
})
workobserver.observe(worksection)



//   <!-- Setup and start animation! -->
var typed = new Typed('.element', {
    strings: ['Front-End Developer...', 'DESIGN...', 'JAVASCRIPT...', 'BOOTSTRAP...'],
    typeSpeed: 50,
    backSpeed: 20,
    loop: true,
});




const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener('click', (e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    p_btn.forEach((curElem) => curElem.classList.remove('p-btn-acitve'));
    p_btn_clicked.classList.add('p-btn-acitve')


    const btn_num = p_btn_clicked.dataset.btnNum;
    // console.log(btn_num)

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curElem) => curElem.classList.add("p-btn-not-acitve"));
    img_active.forEach((curElem) => curElem.classList.remove("p-btn-not-acitve"));
})


// // form

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "pankajdhindsa143@gmail.com",
        Password: "pankaj@143",
        To: 'pankajdhindsa143@gmail.com',
        From: document.getElementById("email").value,
        Subject: "new contact for Enquiry",
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Pnone No: : " + document.getElementById("number").value
            + "<br> messages: " + document.getElementById("email").value

    })
        .then(
            message => alert("mssage send Succesfully")
        );

}
