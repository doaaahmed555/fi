let message =document.getElementById('message');
let bio=document.getElementById('bio');
let skills=document.getElementById('skills');
let contact=document.getElementById('contact');
let sectionbio=document.getElementById('sectionbio');
let sectionskills=document.getElementById('sectionskills');
let sectioncontact=document.getElementById('sectioncontact');
let sectionprojects=document.getElementById('sectionprojects');
let yourname=document.getElementById('yourname');
let youremail=document.getElementById('youremail');
let yournumber=document.getElementById('yournumber');
let submit=document.getElementById('submit');
let front=document.getElementById('front');
let eles=document.getElementById('eles');
let toolsfront=document.querySelector('.tools-front');
let toolseles=document.querySelector('.tools-eles');
let buttons=document.querySelectorAll('button');
let scroll=document.getElementById('scroll');
let chang =document.getElementById('chang');
let body =document.getElementById('body');
let head =document.getElementById('head');
let loop =document.getElementById('loop');
let mytools =document.getElementById('mytools');
let p = mytools.querySelectorAll('p');
let card= document.querySelectorAll('.card');
// let title= project.querySelector('.title');


// start show sections by be long to parent
function scrolltobio(){
   bio.addEventListener('click',function(){
   sectionbio.scrollIntoView({behavior:"smooth"})
   })}
   scrolltobio()
   function scrolltoskills(){
      skills.addEventListener('click',function(){
      sectionskills.scrollIntoView({behavior:"smooth"})
      })
      }
      scrolltoskills()
      function scrolltoprojects(){
         projects.addEventListener('click',function(){
         sectionprojects.scrollIntoView({behavior:"smooth"})
         })
         }
         scrolltoprojects()
         function scrolltocontact(){
            contact.addEventListener('click',function(){
            sectioncontact.scrollIntoView({behavior:"smooth"})
            })
            }
            scrolltocontact()
            
 // end from show the all sectionss project
 //button hello
 function hello(){
 message.addEventListener('click',function(){
let uesrmessage =window.prompt('enter your message !')
if(uesrmessage!==null){
    alert('Thank you for your message.wait the answer soon! ')
}else{
    'writ amessage if you want this '
}})}
hello();
//button send data user
function send(){
    submit.addEventListener('click',function(){
yourname.value='';
youremail.value='';
yournumber.value='';
  })} 
 send();
// link button whit her santxs
 function showtoolsfront(){
front.addEventListener('click',function(){
toolsfront.style.display='block';
toolseles.style.display='none';
})}
showtoolsfront();
function showtoolseles(){
    eles.addEventListener('click',function(){
    toolseles.style.display='block';
toolsfront.style.display='none';
    }) }
    showtoolseles();
    function showall(){
      all.addEventListener('click',function(){
         toolseles.style.display='block';
         toolsfront.style.display='block';
      }) }
      showall();
function scrolling(){
scroll.addEventListener('click',function(){
   window.scrollTo({
      top:0,
      behavior:'smooth'
 })})
}
scrolling()

function changcolor(){
chang.addEventListener('click',function(){
body.style.background='black';
head.style.background='rgba(90, 85, 85, 0.47)';
loop.style.borderColor='#8b7979';
p.forEach(one=>{
    one.style.background='#B9B28A';
    one.style.color='black'
})
card.forEach(title=>{
    // title.style.background='transparent'
    

})







buttons.forEach(button=>{
    button.style.background='rgba(90, 85, 85, 0.47)';
})
})}
changcolor();

 //done #


