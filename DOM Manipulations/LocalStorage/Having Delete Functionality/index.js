




function handleFormSubmit(event){
    event.preventDefault();

    const ul=document.querySelector("ul");
    const username=event.target.username.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;
    // console.log(username,email,phone);

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



    ul.addEventListener("click",function(event){
        if(event.target.type === "button"){
             const currentdeleteelement=event.target.parentElement;
          //    console.log(currentdeleteelement)
             ul.removeChild(currentdeleteelement);
        }
  });


};




