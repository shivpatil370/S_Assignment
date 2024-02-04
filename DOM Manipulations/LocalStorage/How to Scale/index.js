
const body=document.querySelector("body");
let ul=document.createElement("ul");
body.appendChild(ul);

function handleFormSubmit(event){
    event.preventDefault();
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
    li.textContent=(text)
    ul.appendChild(li);

}