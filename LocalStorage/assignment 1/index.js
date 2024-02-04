

const form=document.querySelector("form");
form.addEventListener("submit",handleFormSubmit);

function handleFormSubmit(event){
    event.preventDefault();
    const username=event.target.username.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;

    localStorage.setItem("username",JSON.stringify(username))
    localStorage.setItem("email",JSON.stringify(email))
    localStorage.setItem("phone",JSON.stringify(phone))

    // .........................set value empty............................\\
    const username1=document.querySelector("#username");
    const email1=document.querySelector("#email");
    const phone1=document.querySelector("#phone");
    username1.value=""
    email1.value=""
    phone1.value=""
    // console.log(event.target.phone.value)
};