// DELETE AND ADD

const form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault()
    // console.log("clicked!");
    const fruittoadd=document.querySelector("#fruit-to-add");
    // console.log(fruittoadd.value)
    const li=document.createElement("li");
    li.className="fruit";
    const fruits=document.querySelector(".fruits");
    li.innerHTML= fruittoadd.value + `<button class="delete-btn">x</button>`;
    fruits.appendChild(li);

   

    // const text=document.createTextNode(fruittoadd.value);
    // li.appendChild(text);
    // // console.log(li);
    // const fruits=document.querySelector(".fruits");
    // fruits.appendChild(li);

    // li.className="fruit";
    // // console.log(li);

    // const btn=document.createElement("button");
    // btn.className="delete-btn";
    // btn.textContent="x";
    // li.appendChild(btn);
    // // .........................................................................\\
    

});

const fruits=document.querySelector(".fruits");
fruits.addEventListener("click",function(event){
    if(event.target.classList.contains("delete-btn")){
        const fruittodelete=event.target.parentElement; 
        fruits.removeChild(fruittodelete);
        //  console.log(event.target.parentElement);
    }
});


let fruit=document.querySelectorAll("li");
for(let i=0; i<fruit.length; i++){
    const btn1=document.createElement("button");
        btn1.className="edit-btn";
        btn1.textContent="Edit";
    fruit[i].appendChild(btn1);
}


// //////////////////////////////2nd code=>//////////////////////////
// const form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     const fruittoadd = document.querySelector("#fruit-to-add");
//     const li = document.createElement("li");
//     li.className = "fruit"; // Add the 'fruit' class to the new list item
//     const fruits = document.querySelector(".fruits");
//     li.innerHTML = fruittoadd.value + `<button class="delete-btn">x</button>` + `<button class="edit-btn">Edit</button>`;
//     fruits.appendChild(li);
// });


// const fruits = document.querySelector(".fruits");
// fruits.addEventListener("click", function(event) {
//     if(event.target.classList.contains("delete-btn")) {
//         const fruittodelete = event.target.parentElement; 
//         fruits.removeChild(fruittodelete);
//     }
// });


// let fruit = document.querySelectorAll(".fruit");
// for(let i = 0; i < fruit.length; i++) {
//     const btn1 = document.createElement("button");
//     btn1.className = "edit-btn";
//     btn1.textContent = "Edit";
//     fruit[i].appendChild(btn1);
// }
