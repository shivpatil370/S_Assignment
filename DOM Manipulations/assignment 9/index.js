
const form=document.querySelector("form");
const btn=document.querySelector("button");
const inp=document.createElement("input");
inp.id="description";
inp.type="text";
inp.placeholder="description of the fruit";

form.insertBefore(inp,btn);
// ......................................................//


form.addEventListener("submit",function(event){
   event.preventDefault();

   // const fruit=document.getElementsByClassName("fruit");
   const description=document.getElementById("description");
   // console.log(description.value);

   const fruits1=document.querySelector(".fruits");
   const inp1=document.querySelector("#fruit-to-add");
   let li=document.createElement("li");
   li.textContent=inp1.value;
   // console.log(inp1.value)
   li.innerHTML = li.innerHTML + `<p style="font-style: italic;" class="para">${description.value}</p>` + `<button class="delete-btn">x</button>`;
   fruits1.appendChild(li);

   const para=document.querySelectorAll(".para");
  
   

})




// .......................................................//
const filter=document.getElementById("filter");
filter.addEventListener("keyup",function(event){
    const textenteredbyuser= event.target.value.toLowerCase();
    const fruititems=document.getElementsByClassName("fruit");
    for(let i=0; i<fruititems.length; i++){
        const currentfruit= fruititems[i].firstChild.textContent.toLowerCase();
      //   const description1 = fruititems[i].getElementsByTagName('p')[0].textContent.toLowerCase();
      let pareg=document.querySelectorAll(".para");
      // console.log(pareg[0].textContent);
      const descriptions=fruititems[i]
        console.log(descriptions);
         if(currentfruit.indexOf(textenteredbyuser)===-1){
            fruititems[i].style.display="none";
         }
         else{
            fruititems[i].style.display="flex";
         }
    }
});


