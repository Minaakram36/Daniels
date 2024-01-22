let root = document.documentElement;

// start works
let menu= document.querySelectorAll('.works .menu span');
menu.forEach((elem)=>{
elem.addEventListener('click',(event)=>{
    // active class on current selected menu item
    let currentActive = document.querySelector('.works .active')
    currentActive.classList.remove('active');
    event.currentTarget.classList.add('active')
    
    // visibility of selected products
    document.querySelectorAll(`.${ event.currentTarget.innerHTML}`).forEach((element)=>{
        element.style.display="block";
    });

    document.querySelectorAll(`.All:not(.${ event.currentTarget.innerHTML})`).forEach((element)=>{
        element.style.display="none";
    })

})
});




//end works 





window.onscroll = function() {

    let current_location=document.getElementById('about').getBoundingClientRect().top;
    
    if(current_location <=0 ){
    let nav= document.querySelector('.navbar-dark');
    nav.classList.add('navbar-light');
    nav.classList.remove('navbar-dark');
    nav.classList.toggle('bg-white');
    root.style.setProperty('--activeColor','black')
    }
    else{
        let nav= document.querySelector('.navbar-light')
        nav.classList.add('navbar-dark');
        nav.classList.remove('navbar-light');
        nav.classList.toggle('bg-white');
        root.style.setProperty('--activeColor','white')
    }
}
