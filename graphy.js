const img_container=document.querySelector(".result-container");

const count_text=document.querySelector(".count-text");
const search_button=document.querySelector(".input3");
search_button.addEventListener("click",function(){
    var element_count=img_container.childElementCount;
    count_text.innerHTML="("+element_count+" images found)";
    if(element_count==0){
        count_text.innerHTML="No images found";
    }
})

const dot1=document.querySelector(".dot1");
const dot2=document.querySelector(".dot2");
const dot3=document.querySelector(".dot3");

dot1.addEventListener("click",function(){
    window.scrollTo({top:0})
    dot2.classList.remove("show");
    dot1.classList.add("show");
    dot3.classList.remove("show");
})
dot2.addEventListener("click",function(){
    window.scrollTo({top:(screen.height-(screen.height/6)+10)});
    dot2.classList.add("show");
    dot1.classList.remove("show");
    dot3.classList.remove("show");
})
dot3.addEventListener("click",function(){
    window.scrollTo({top:(screen.height*2)});
    dot2.classList.remove("show");
    dot1.classList.remove("show");
    dot3.classList.add("show");
})
document.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop>=0 && document.documentElement.scrollTop<(screen.height-(screen.height/6))){
        dot2.classList.remove("show");
        dot1.classList.add("show");
        dot3.classList.remove("show");
    }
    if(document.documentElement.scrollTop>=(screen.height-(screen.height/6)) && document.documentElement.scrollTop<((screen.height-(screen.height/6))*2)){
        dot2.classList.add("show");
        dot1.classList.remove("show");
        dot3.classList.remove("show");
    }
    if(document.documentElement.scrollTop>=(screen.height-(screen.height/6))*2){
        dot2.classList.remove("show");
        dot1.classList.remove("show");
        dot3.classList.add("show");
    }
})