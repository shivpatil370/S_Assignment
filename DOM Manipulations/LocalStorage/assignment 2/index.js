
window.handleFormSubmit=function(event){
    event.preventDefault();

    const username=event.target.username.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;
    // console.log(username,email,phone);
     let obj={
        Username:username,
        Email:email,
        Phone:phone
     };
    //  console.log(obj);
     localStorage.setItem("User Details",JSON.stringify(obj));
};

console.log(JSON.parse(localStorage.getItem("User Details")));