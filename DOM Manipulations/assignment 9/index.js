
const filter=document.getElementById("filter");
filter.addEventListener("keyup",function(event){
    const textenteredbyuser= event.target.value.toLowerCase();
    const fruititems=document.getElementsByClassName("fruit");
    for(let i=0; i<fruititems.length; i++){
        const currentfruit= fruititems[i].firstChild.textContent.toLowerCase();
         if(currentfruit.indexOf(textenteredbyuser)===-1){
            fruititems[i].style.display="none";
         }
         else{
            fruititems[i].style.display="flex";
         }
    }
})