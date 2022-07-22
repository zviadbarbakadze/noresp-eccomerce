const Thumb=document.querySelectorAll('.thumb');
const Thumb1=document.querySelector('.thumbnail-1');
const Thumb1src=document.querySelector('.thumbnail-1').src;
const Thumb2=document.querySelector('.thumbnail-2');
const Thumb2src=document.querySelector('.thumbnail-2').src;
const Thumb3=document.querySelector('.thumbnail-3');
const Thumb3src=document.querySelector('.thumbnail-3').src;
const Thumb4=document.querySelector('.thumbnail-4');
const Thumb4src=document.querySelector('.thumbnail-4').src;


const product=document.querySelectorAll('.product')
const lightBox=document.querySelector('.left-body-active');
const body=document.querySelector('.body');
const close=document.querySelector('.close')
const nextSlide=document.querySelector('.next')
const prevSlide=document.querySelector('.prev')
const product1=document.querySelector('.product-1')
const main=document.querySelector('.main')
const slides=document.querySelector('.slides').children;

const totalSlides=slides.length;

const addCartButton=document.querySelector('.cart-button')
let index=0;

let input=document.querySelector('.input')
const minus=document.querySelector('.minus')

const plus=document.querySelector('.plus')
const price=document.querySelector('.price')

const divCart=document.querySelector('.div-cart')
const divCartText=document.querySelector('.cart-text1')
const cartImage=document.querySelector('.cart-image')
const headenCart=document.querySelector('.headen-cart')
const result=document.querySelector('.add-info')
 const cart=document.querySelector('.cart')
 const sumPrice=document.querySelector('.add-sum-price')
 const deleteButton=document.querySelector('.delete')
const msg=document.querySelector('.msg')
 cart.addEventListener('click',()=>{
    divCart.classList.toggle('active')
 })




plus.addEventListener('click',()=>{
   input.value ++
})

minus.addEventListener('click',()=>{
    input.value --
 })

 addCartButton.addEventListener("click",()=>{
    divCartText.style.display="none"
    headenCart.style.display="block"
    let sum=price.value*input.value;
    
      result.innerText="$"+price.value+'x'+input.value;
      sumPrice.innerText= '$'+sum;
      msg.style.display="block"
      msg.value=input.value
      
      
      
   
     
})
deleteButton.addEventListener('click',()=>{
    result.innerText="";
    sumPrice.innerText="";
    divCartText.style.display="block"
    headenCart.style.display="none"
    msg.value=""
    msg.style.display="none"
    
})

Thumb1.addEventListener('click',()=>{
    product1.src=Thumb1src
    
})

Thumb2.addEventListener('click',()=>{
    product1.src=Thumb2src
})
Thumb3.addEventListener('click',()=>{
    product1.src=Thumb3src
})

Thumb4.addEventListener('click',()=>{
    product1.src=Thumb4src
})



close.addEventListener('click',()=>{
    lightBox.style.display="none";
})


Thumb.forEach(item=>{
    item.addEventListener("click", ()=>{
        lightBox.style.display="block"
        
       
      
    })
})

main.addEventListener("click",()=>{
    lightBox.style.display="block"
})

nextSlide.addEventListener('click',()=>{
 next("next")
 
})

prevSlide.addEventListener('click',()=>{
    next('prev')
    
   })

   function next(direction){
    if(direction=="next"){
        index++;
        if(index==totalSlides){
            index=0
        }
    }
    else{
        if(index==0){
            index=totalSlides-1;
        }
        else{
            index--
        }
    }
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none"
    }
    slides[index].style.display="block"
   }