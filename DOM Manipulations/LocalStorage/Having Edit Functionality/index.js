

const form=document.querySelector("form");
let ul=document.getElementsByTagName("ul")[0];
// console.log(ul)
// ul.className="uniqueul";


function handleFormSubmit(event){
    event.preventDefault();
    const username=event.target.username.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;
    // console.log(username,email,phone);

    // ...........................................
         let user1=document.querySelector("#username");
         let email1=document.querySelector("#email");
         let phone1=document.querySelector("#phone");
         user1.value="";
         email1.value="";
         phone1.value="";
    // ...........................................

    let obj={
        username:username,
        email:email,
        phone:phone
    };
    // console.log(obj);
    localStorage.setItem(`${obj.username}`,JSON.stringify(obj));

    let li=document.createElement("li");
    const text=`${obj.username} - ${obj.email} - ${obj.phone}`
    // console.log(text);
    li.textContent=(text);
    li.className="delete-btn"
    ul.appendChild(li);
    let inp=document.createElement("input");
    inp.type="button";
    inp.value="delete";
    li.appendChild(inp);

    let inp1=document.createElement("input");
    inp1.type="button";
    inp1.value="edit";
    inp1.className="editbtn";
    li.appendChild(inp1);





// const ulelement=document.querySelector(".uniqueul");
ul.addEventListener("click",function(event){
    
      if(event.target.type === "button"){
        const currentele1=event.target.parentElement;
          const eachele1= (currentele1.textContent.split("-"));
           const currentdeleteelement=event.target.parentElement;
        //    console.log(currentdeleteelement)
           ul.removeChild(currentdeleteelement);
           localStorage.removeItem(eachele1[0].trim())
        };

      
});;


// const ulselect=document.querySelector(".uniqueul");
ul.addEventListener("click",function(event){
    if(event.target.classList.contains("editbtn")){
          const currentele=event.target.parentElement;
          const eachele= (currentele.textContent.split("-"));
           
          let user1=document.querySelector("#username");
          let email1=document.querySelector("#email");
          let phone1=document.querySelector("#phone");
          user1.value=eachele[0];
          email1.value=eachele[1];
          phone1.value=eachele[2];
    }
})


};