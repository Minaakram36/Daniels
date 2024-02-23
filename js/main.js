let root = document.documentElement;

// start home 

// text animation


document.addEventListener("DOMContentLoaded", function() {

let currentText=document.querySelector(".text1"); //ref to the main text element

let text2=document.querySelector(".text2"); 
let text3=document.querySelector(".text3"); // ref to text2 and text 3 to get their width from the dom their opacity is set to 0 

let texts=["Designer","Developer","Larry Daniels"] // list of text to cycle from

let textWith=[text2.offsetWidth,text3.offsetWidth,currentText.offsetWidth] // array of the width of each word

text2.remove();
text3.remove(); //removing text2 and 3 from dom i only needed to know their width

let index= 0;

root.style.setProperty("--animationTextWidth",`${currentText.offsetWidth}px`) // setting the var in css  that i use for the animation

setInterval(() => {

    currentText.style.animationName="eraseAnimation" //  trigger the erasing text animtion of the current text

    setTimeout(() => {

        currentText.innerHTML=texts[index]; // changing the  the text

        root.style.setProperty("--animationTextWidth",`${textWith[index]}px`) // updating the css variable with the new width of the next text

        index=(index+1)%texts.length; // changing the index

        currentText.style.animationName="appearAnimation" // triggering the reveal text animation
        
    }, 500);
   
}, 3000);
});







// end home 


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
